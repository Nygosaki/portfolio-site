// Thanks to Jack Rugile for creating the Canvas Parallax Skyline for sketch.js which I adapted to work with vanilla js canvases.
function skyline() {

        var Building, Skyline, dt, skylines;
      
        const canvas = document.getElementById("backgroundCanvas");
        const ctx = canvas.getContext("2d");

        canvas.style.background = 'linear-gradient(#1A1F2C 60%, rgba(92, 80, 105, 0.5))';
      
        skylines = [];
      
        dt = 1;
      
        Building = function(config) {
          return this.reset(config);
        };
      
        Building.prototype.reset = function(config) {
          this.layer = config.layer;
          this.x = config.x;
          this.y = config.y;
          this.width = config.width;
          this.height = config.height;
          this.color = config.color;
          this.slantedTop = Math.floor(Math.random() * 10) === 0;
          this.slantedTopHeight = this.width / (Math.random() * 50);
          this.slantedTopDirection = Math.round(Math.random()) === 0;
          this.spireTop = Math.floor(Math.random() * 15) === 0;
          this.spireTopWidth = Math.random() * (this.width * .07 - this.width * .01) + this.width * .01;
          this.spireTopHeight = Math.random() * (20 - 10) + 10;
          this.antennaTop = !this.spireTop && Math.floor(Math.random() * 10) === 0;
          this.antennaTopWidth = this.layer / 2;
          return this.antennaTopHeight = Math.random() * (20 - 5) + 5;
        };
      
        Building.prototype.render = function() {
          ctx.fillStyle = ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.rect(this.x, this.y, this.width, this.height);
          ctx.fill();
          ctx.stroke();
          if (this.slantedTop) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.width, this.y);
            if (this.slantedTopDirection) {
              ctx.lineTo(this.x + this.width, this.y - this.slantedTopHeight);
            } else {
              ctx.lineTo(this.x, this.y - this.slantedTopHeight);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          if (this.spireTop) {
            ctx.beginPath();
            ctx.moveTo(this.x + (this.width / 2), this.y - this.spireTopHeight);
            ctx.lineTo(this.x + (this.width / 2) + this.spireTopWidth, this.y);
            ctx.lineTo(this.x + (this.width / 2) - this.spireTopWidth, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          if (this.antennaTop) {
            ctx.beginPath();
            ctx.moveTo(this.x + (this.width / 2), this.y - this.antennaTopHeight);
            ctx.lineTo(this.x + (this.width / 2), this.y);
            ctx.lineWidth = this.antennaTopWidth;
            return ctx.stroke();
          }
        };
      
        Skyline = function(config) {
          this.x = 0;
          this.buildings = [];
          this.layer = config.layer;
          this.width = {
            min: config.width.min,
            max: config.width.max
          };
          this.height = {
            min: config.height.min,
            max: config.height.max
          };
          this.speed = config.speed;
          this.color = config.color;
          this.populate();
          return this;
        };
      
        Skyline.prototype.populate = function() {
          var newHeight, newWidth, results, totalWidth;
          totalWidth = 0;
          results = [];
          while (totalWidth <= canvas.width + (this.width.max * 2)) {
            newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            this.buildings.push(new Building({
              layer: this.layer,
              x: this.buildings.length === 0 ? 0 : this.buildings[this.buildings.length - 1].x + this.buildings[this.buildings.length - 1].width,
              y: canvas.height - newHeight,
              width: newWidth,
              height: newHeight,
              color: this.color
            }));
            results.push(totalWidth += newWidth);
          }
          return results;
        };
      
        Skyline.prototype.update = function() {
          var firstBuilding, lastBuilding, newHeight, newWidth;
          this.buildings.forEach(building => {
            building.x -= (canvas.mouseX * this.speed) * dt;
          });
          firstBuilding = this.buildings[0];
          if (firstBuilding.width + firstBuilding.x < 0) {
            newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            lastBuilding = this.buildings[this.buildings.length - 1];
            firstBuilding.reset({
              layer: this.layer,
              x: lastBuilding.x + lastBuilding.width,
              y: canvas.height - newHeight,
              width: newWidth,
              height: newHeight,
              color: this.color
            });
            this.buildings.push(this.buildings.shift());
          }
        };
      
        Skyline.prototype.render = function() {
          var i;
          i = this.buildings.length;
          ctx.save();
          ctx.translate(this.x, (canvas.height - canvas.mouseY) / 20 * this.layer);
          while (i--) {
            this.buildings[i].render(i);
          }
          return ctx.restore();
        };
      
        function setup() {
          var i, results;
          i = 5;
          results = [];
          while (i--) {
            results.push(skylines.push(new Skyline({
              layer: i + 1,
              width: {
                min: (i + 1) * 30,
                max: (i + 1) * 40
              },
              height: {
                min: 150 - (i * 35),
                max: 300 - (i * 35)
              },
              speed: (i + 1) * .003,
              color: 'hsl( 270, ' + (((i + 1) * 1) + 10) + '%, ' + (75 - (i * 13)) + '% )'
            })));
          }
          return results;
        }
      
        function clear() {
          return ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      
        function update() {
          var i, results;
          dt = dt < .1 ? .1 : dt / 16;
          dt = dt > 5 ? 5 : dt;
          i = skylines.length;
          results = [];
          while (i--) {
            results.push(skylines[i].update(i));
          }
          return results;
        }
      
        function draw() {
          var i, results;
          i = skylines.length;
          results = [];
          while (i--) {
            results.push(skylines[i].render(i));
          }
          return results;
        }
      
        canvas.mouseX = canvas.width / 10;
        canvas.mouseY = canvas.height;
      
        setup();
      
        function animate() {
          clear();
          update();
          draw();
          requestAnimationFrame(animate);
        }
      
        animate();
      
        window.addEventListener('mousemove', function(e) {
          canvas.mouseX = e.pageX;
          canvas.mouseY = e.pageY;
        });
  
  }

  export { skyline };