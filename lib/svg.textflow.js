// svg.textflow.js 0.7 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

SVG.Textflow = function() {
  this.constructor.call(this, SVG.create('text'))

  this.lines=[]
  
  /* define default style */
  this.styles = {
    'font-size':    18
  , 'font-family':  'Helvetica, Arial, sans-serif'
  , 'text-anchor':  'start'
  }
  
  /* initialize private variables */
  this._x       = 0
  this._y       = 0
  this._width   = 100
  this._height  = 100
  this._leading = 1.2
  
  /* store type */
  this.type = 'textflow'
}

// Inherit from SVG.Text
SVG.Textflow.prototype = new SVG.Text

// Add specific methods
SVG.extend(SVG.Textflow, {
  // Move over x-axis
  x: function(x, a) {
    /* act as getter */
    if (x == null)
      return a ? this.attr('x') : this.bbox().x
    
    /* store x */
    this._x = x
    
    return this.attr('x', x)
  }
  // Move over y-axis
, y: function(y) {
    if (y != null)
      this._y = y /= this.transform().scaleY
    return this.attr('y', y)
  }
  // Update textflow content
, text: function(text) {
    /* act as getter */
    if (text == null)
      return this.content
    
    /* update the content */
    this.content = SVG.regex.isBlank.test(text) ? 'text' : text
    
    return this.attr('x', 0).attr(this.styles)
  }
  // Define textflow size
, size: function(width, height) {
    this._width  = width
    this._height = height == null ? width : height
    
    return this.build().move(this._x, this._y)
  }
  // Build 
, build: function() {
    var i, w, box, sandbox, span, line, words, word
      , self = this
      , lines = []
      , paragraphs = (this.content || '').split('\n')
      , size = this.styles['font-size']
      , tstyle = {
          dy: this._leading * size
        , x:  0
        , 'font-size': size
        , 'style': 'font-size:' + size + ';'
        }
    
    /* remove existing lines */
    this.clear()
    this.data('overflow', null)
    
    /* reset correction offset */
    this.transform('y', 0)
    
    /* create temporary measuring sandbox */
    sandbox = this.parent()
      .text('well')
      .attr(this.styles)
      .move(-999999,-999999)
    
    /* parse paragraphs */
    i = paragraphs.length
    while (i--) {
      /* prepare line */
      line = ''
      words = paragraphs.shift().split(' ')
      
      /* add words */
      w = words.length
      while (w--) {
        word = words.shift()
        
        /* try text */
        sandbox.text(line + word).attr(tstyle)
        
        /* measure width */
        box = sandbox.bbox()
        
        /* save line */
        if (box.width + size / 2 <= this._width) {
          line += (line.length > 0 ? ' ' : '') + word
        } else {
          lines.push(line)
          line = word
        }
      }
      
      /* add last line */
      lines.push(line)
    }
    
    /* build textflow */
    i = lines.length
    while (i--) {
      /* check text height */
      if (this.bbox().height > this._height) {
        if (span)
          this.node.removeChild(span.node)
        
        lines.unshift(span.node.textContent)
        
        break
      }
      
      /* create tspan */
      //span = new SVG.TSpan().attr('xml:space', 'preserve', 'http://www.w3.org/XML/1998/namespace')
      span = new SVG.Tspan
      this.node.appendChild(span.node)
      this.lines.push(span)
      
      /* add text */
      line = lines.shift()
      span.text(line == '' ? ' ' : line).attr(tstyle)
    }
    
    /* remove last line if necessary */
    if (this.bbox().height > this._height && span) {
      this.node.removeChild(span.node)
      lines.unshift(span.node.textContent)
    }
    
    /* ensure correct visual position */
    this.transform('y', -size * this._base)
    
    /* save overflow text */
    this.data('overflow', lines.join(' '), true)
    
    /* remove measuring sandbox */
    sandbox.remove()
    
    /* HACK ALERT!!! this is a hack for chrome to render text properly. */
    /* With @font-face chrome som e  ti es   re nder s  t e xt   li k e  thi s */
    this.style('fill', new SVG.Color(this.attr('fill')).brightness() > 0.5 ? '#999' : '#333')
    
    setTimeout(function() {
      self.style('fill', null)
    }, 1)
    
    return this
  }
  // Rebuild
, rebuild: function(a, v) {
    if (['font-size', 'font-family', 'leading'].indexOf(a) > -1)
      this.build().move(this._x, this.attr('y'))
    
    else if (a == 'text-anchor')
      this.transform('x', v == 'start' ? 0 : v == 'middle' ? this._width / 2 : this._width)
    
    else if (a == 'x')
      for (var i = this.lines.length - 1; i >= 0; i--)
        this.lines[i].attr(a, v)
    
    return this
  }
  
})


// Add textflow to container methods
SVG.extend(SVG.Container, {
  // Create textflow element
  textflow: function(text, width, height) {
    return this.put(new SVG.Textflow).size(width == null ? 100 : width, height == null ? 100 : height).text(text)
  }
  
})