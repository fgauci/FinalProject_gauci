am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var chart = am4core.create("chartData1", am4charts.XYChart);
  
  var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxisX.renderer.ticks.template.disabled = true;
  valueAxisX.renderer.axisFills.template.disabled = true;
  chart.exporting.menu = new am4core.ExportMenu();
  chart.exporting.menu.align = "right";
  chart.exporting.menu.verticalAlign = "top";
  var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxisY.renderer.ticks.template.disabled = true;
  valueAxisY.renderer.axisFills.template.disabled = true;
  

  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";
  series.dataFields.value = "value";
  series.strokeOpacity = 0;
  series.sequencedInterpolation = true;
  series.tooltip.pointerOrientation = "vertical";
  
  var bullet = series.bullets.push(new am4core.Circle());
  bullet.fill = am4core.color("#ff0000");
  bullet.propertyFields.fill = "color";
  bullet.strokeOpacity = 0;
  bullet.strokeWidth = 1;
  bullet.fillOpacity = 0.5;
  bullet.stroke = am4core.color("#ffffff");
  bullet.hiddenState.properties.opacity = 0;
  bullet.tooltipText = "Time:{time}";
  
  var outline = chart.plotContainer.createChild(am4core.Circle);
  outline.fillOpacity = 0;
  outline.strokeOpacity = 0.8;
  outline.stroke = am4core.color("#ff0000");
  outline.strokeWidth = 2;
  outline.hide(0);
  
  var blurFilter = new am4core.BlurFilter();
  outline.filters.push(blurFilter);
  
  bullet.events.on("over", function(event) {
      var target = event.target;
      chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
      chart.cursor.lineX.y = target.pixelY;
      chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
      valueAxisX.tooltip.disabled = false;
      valueAxisY.tooltip.disabled = false;
  
      outline.radius = target.pixelRadius + 2;
      outline.x = target.pixelX;
      outline.y = target.pixelY;
      outline.show();
  })
  
  bullet.events.on("out", function(event) {
      chart.cursor.triggerMove(event.pointer.point, "none");
      chart.cursor.lineX.y = 0;
      chart.cursor.lineY.x = 0;
      valueAxisX.tooltip.disabled = true;
      valueAxisY.tooltip.disabled = true;
      outline.hide();
  })
  
  var hoverState = bullet.states.create("hover");
  hoverState.properties.fillOpacity = 1;
  hoverState.properties.strokeOpacity = 1;
  
  series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
  
  
  
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomXY";
  chart.cursor.snapToSeries = series;
  
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
  
  chart.dataSource.url = "data/data1.csv";
  chart.dataSource.parser = new am4core.CSVParser();
  chart.dataSource.parser.options.useColumnNames = true;


  });

  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartData2", am4charts.XYChart);
    
    var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.renderer.ticks.template.disabled = true;
    valueAxisX.renderer.axisFills.template.disabled = true;
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = "right";
    chart.exporting.menu.verticalAlign = "top";
    var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.ticks.template.disabled = true;
    valueAxisY.renderer.axisFills.template.disabled = true;
    
  
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dataFields.value = "value";
    series.strokeOpacity = 0;
    series.sequencedInterpolation = true;
    series.tooltip.pointerOrientation = "vertical";
    
    var bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#ff0000");
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 1;
    bullet.fillOpacity = 0.5;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;
    bullet.tooltipText = "Time:{time}";
    
    var outline = chart.plotContainer.createChild(am4core.Circle);
    outline.fillOpacity = 0;
    outline.strokeOpacity = 0.8;
    outline.stroke = am4core.color("#ff0000");
    outline.strokeWidth = 2;
    outline.hide(0);
    
    var blurFilter = new am4core.BlurFilter();
    outline.filters.push(blurFilter);
    
    bullet.events.on("over", function(event) {
        var target = event.target;
        chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
        chart.cursor.lineX.y = target.pixelY;
        chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
        valueAxisX.tooltip.disabled = false;
        valueAxisY.tooltip.disabled = false;
    
        outline.radius = target.pixelRadius + 2;
        outline.x = target.pixelX;
        outline.y = target.pixelY;
        outline.show();
    })
    
    bullet.events.on("out", function(event) {
        chart.cursor.triggerMove(event.pointer.point, "none");
        chart.cursor.lineX.y = 0;
        chart.cursor.lineY.x = 0;
        valueAxisX.tooltip.disabled = true;
        valueAxisY.tooltip.disabled = true;
        outline.hide();
    })
    
    var hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;
    
    series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
    
    
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY";
    chart.cursor.snapToSeries = series;
    
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
    
    chart.dataSource.url = "data/data2.csv";
    chart.dataSource.parser = new am4core.CSVParser();
    chart.dataSource.parser.options.useColumnNames = true;
  
  
    });

    
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartData3", am4charts.XYChart);
    
    var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.renderer.ticks.template.disabled = true;
    valueAxisX.renderer.axisFills.template.disabled = true;
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = "right";
    chart.exporting.menu.verticalAlign = "top";
    var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.ticks.template.disabled = true;
    valueAxisY.renderer.axisFills.template.disabled = true;
    
  
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dataFields.value = "value";
    series.strokeOpacity = 0;
    series.sequencedInterpolation = true;
    series.tooltip.pointerOrientation = "vertical";
    
    var bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#ff0000");
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 1;
    bullet.fillOpacity = 0.5;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;
    bullet.tooltipText = "Time:{time}";
    
    var outline = chart.plotContainer.createChild(am4core.Circle);
    outline.fillOpacity = 0;
    outline.strokeOpacity = 0.8;
    outline.stroke = am4core.color("#ff0000");
    outline.strokeWidth = 2;
    outline.hide(0);
    
    var blurFilter = new am4core.BlurFilter();
    outline.filters.push(blurFilter);
    
    bullet.events.on("over", function(event) {
        var target = event.target;
        chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
        chart.cursor.lineX.y = target.pixelY;
        chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
        valueAxisX.tooltip.disabled = false;
        valueAxisY.tooltip.disabled = false;
    
        outline.radius = target.pixelRadius + 2;
        outline.x = target.pixelX;
        outline.y = target.pixelY;
        outline.show();
    })
    
    bullet.events.on("out", function(event) {
        chart.cursor.triggerMove(event.pointer.point, "none");
        chart.cursor.lineX.y = 0;
        chart.cursor.lineY.x = 0;
        valueAxisX.tooltip.disabled = true;
        valueAxisY.tooltip.disabled = true;
        outline.hide();
    })
    
    var hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;
    
    series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
    
    
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY";
    chart.cursor.snapToSeries = series;
    
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
    
    chart.dataSource.url = "data/data3.csv";
    chart.dataSource.parser = new am4core.CSVParser();
    chart.dataSource.parser.options.useColumnNames = true;
  
  
    });


    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartData2", am4charts.XYChart);
        
        var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxisX.renderer.ticks.template.disabled = true;
        valueAxisX.renderer.axisFills.template.disabled = true;
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "right";
        chart.exporting.menu.verticalAlign = "top";
        var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxisY.renderer.ticks.template.disabled = true;
        valueAxisY.renderer.axisFills.template.disabled = true;
        
      
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueX = "x";
        series.dataFields.valueY = "y";
        series.dataFields.value = "value";
        series.strokeOpacity = 0;
        series.sequencedInterpolation = true;
        series.tooltip.pointerOrientation = "vertical";
        
        var bullet = series.bullets.push(new am4core.Circle());
        bullet.fill = am4core.color("#ff0000");
        bullet.propertyFields.fill = "color";
        bullet.strokeOpacity = 0;
        bullet.strokeWidth = 1;
        bullet.fillOpacity = 0.5;
        bullet.stroke = am4core.color("#ffffff");
        bullet.hiddenState.properties.opacity = 0;
        bullet.tooltipText = "Time:{time}";
        
        var outline = chart.plotContainer.createChild(am4core.Circle);
        outline.fillOpacity = 0;
        outline.strokeOpacity = 0.8;
        outline.stroke = am4core.color("#ff0000");
        outline.strokeWidth = 2;
        outline.hide(0);
        
        var blurFilter = new am4core.BlurFilter();
        outline.filters.push(blurFilter);
        
        bullet.events.on("over", function(event) {
            var target = event.target;
            chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
            chart.cursor.lineX.y = target.pixelY;
            chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
            valueAxisX.tooltip.disabled = false;
            valueAxisY.tooltip.disabled = false;
        
            outline.radius = target.pixelRadius + 2;
            outline.x = target.pixelX;
            outline.y = target.pixelY;
            outline.show();
        })
        
        bullet.events.on("out", function(event) {
            chart.cursor.triggerMove(event.pointer.point, "none");
            chart.cursor.lineX.y = 0;
            chart.cursor.lineY.x = 0;
            valueAxisX.tooltip.disabled = true;
            valueAxisY.tooltip.disabled = true;
            outline.hide();
        })
        
        var hoverState = bullet.states.create("hover");
        hoverState.properties.fillOpacity = 1;
        hoverState.properties.strokeOpacity = 1;
        
        series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
        
        
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomXY";
        chart.cursor.snapToSeries = series;
        
        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();
        
        chart.dataSource.url = "data/data2.csv";
        chart.dataSource.parser = new am4core.CSVParser();
        chart.dataSource.parser.options.useColumnNames = true;
      
      
        });
    
        
      am4core.ready(function() {
    
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartData4", am4charts.XYChart);
        
        var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxisX.renderer.ticks.template.disabled = true;
        valueAxisX.renderer.axisFills.template.disabled = true;
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "right";
        chart.exporting.menu.verticalAlign = "top";
        var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxisY.renderer.ticks.template.disabled = true;
        valueAxisY.renderer.axisFills.template.disabled = true;
        
      
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueX = "x";
        series.dataFields.valueY = "y";
        series.dataFields.value = "value";
        series.strokeOpacity = 0;
        series.sequencedInterpolation = true;
        series.tooltip.pointerOrientation = "vertical";
        
        var bullet = series.bullets.push(new am4core.Circle());
        bullet.fill = am4core.color("#ff0000");
        bullet.propertyFields.fill = "color";
        bullet.strokeOpacity = 0;
        bullet.strokeWidth = 1;
        bullet.fillOpacity = 0.5;
        bullet.stroke = am4core.color("#ffffff");
        bullet.hiddenState.properties.opacity = 0;
        bullet.tooltipText = "Time:{time}";
        
        var outline = chart.plotContainer.createChild(am4core.Circle);
        outline.fillOpacity = 0;
        outline.strokeOpacity = 0.8;
        outline.stroke = am4core.color("#ff0000");
        outline.strokeWidth = 2;
        outline.hide(0);
        
        var blurFilter = new am4core.BlurFilter();
        outline.filters.push(blurFilter);
        
        bullet.events.on("over", function(event) {
            var target = event.target;
            chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
            chart.cursor.lineX.y = target.pixelY;
            chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
            valueAxisX.tooltip.disabled = false;
            valueAxisY.tooltip.disabled = false;
        
            outline.radius = target.pixelRadius + 2;
            outline.x = target.pixelX;
            outline.y = target.pixelY;
            outline.show();
        })
        
        bullet.events.on("out", function(event) {
            chart.cursor.triggerMove(event.pointer.point, "none");
            chart.cursor.lineX.y = 0;
            chart.cursor.lineY.x = 0;
            valueAxisX.tooltip.disabled = true;
            valueAxisY.tooltip.disabled = true;
            outline.hide();
        })
        
        var hoverState = bullet.states.create("hover");
        hoverState.properties.fillOpacity = 1;
        hoverState.properties.strokeOpacity = 1;
        
        series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
        
        
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomXY";
        chart.cursor.snapToSeries = series;
        
        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();
        
        chart.dataSource.url = "data/data4.csv";
        chart.dataSource.parser = new am4core.CSVParser();
        chart.dataSource.parser.options.useColumnNames = true;
      
      
        });

        am4core.ready(function() {
    
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end
            
            var chart = am4core.create("chartData5", am4charts.XYChart);
            
            var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
            valueAxisX.renderer.ticks.template.disabled = true;
            valueAxisX.renderer.axisFills.template.disabled = true;
            chart.exporting.menu = new am4core.ExportMenu();
            chart.exporting.menu.align = "right";
            chart.exporting.menu.verticalAlign = "top";
            var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxisY.renderer.ticks.template.disabled = true;
            valueAxisY.renderer.axisFills.template.disabled = true;
            
          
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueX = "x";
            series.dataFields.valueY = "y";
            series.dataFields.value = "value";
            series.strokeOpacity = 0;
            series.sequencedInterpolation = true;
            series.tooltip.pointerOrientation = "vertical";
            
            var bullet = series.bullets.push(new am4core.Circle());
            bullet.fill = am4core.color("#ff0000");
            bullet.propertyFields.fill = "color";
            bullet.strokeOpacity = 0;
            bullet.strokeWidth = 1;
            bullet.fillOpacity = 0.5;
            bullet.stroke = am4core.color("#ffffff");
            bullet.hiddenState.properties.opacity = 0;
            bullet.tooltipText = "Time:{time}";
            
            var outline = chart.plotContainer.createChild(am4core.Circle);
            outline.fillOpacity = 0;
            outline.strokeOpacity = 0.8;
            outline.stroke = am4core.color("#ff0000");
            outline.strokeWidth = 2;
            outline.hide(0);
            
            var blurFilter = new am4core.BlurFilter();
            outline.filters.push(blurFilter);
            
            bullet.events.on("over", function(event) {
                var target = event.target;
                chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
                chart.cursor.lineX.y = target.pixelY;
                chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
                valueAxisX.tooltip.disabled = false;
                valueAxisY.tooltip.disabled = false;
            
                outline.radius = target.pixelRadius + 2;
                outline.x = target.pixelX;
                outline.y = target.pixelY;
                outline.show();
            })
            
            bullet.events.on("out", function(event) {
                chart.cursor.triggerMove(event.pointer.point, "none");
                chart.cursor.lineX.y = 0;
                chart.cursor.lineY.x = 0;
                valueAxisX.tooltip.disabled = true;
                valueAxisY.tooltip.disabled = true;
                outline.hide();
            })
            
            var hoverState = bullet.states.create("hover");
            hoverState.properties.fillOpacity = 1;
            hoverState.properties.strokeOpacity = 1;
            
            series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
            
            
            
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.behavior = "zoomXY";
            chart.cursor.snapToSeries = series;
            
            chart.scrollbarX = new am4core.Scrollbar();
            chart.scrollbarY = new am4core.Scrollbar();
            
            chart.dataSource.url = "data/data5.csv";
            chart.dataSource.parser = new am4core.CSVParser();
            chart.dataSource.parser.options.useColumnNames = true;
          
          
            });

            am4core.ready(function() {
    
                // Themes begin
                am4core.useTheme(am4themes_animated);
                // Themes end
                
                var chart = am4core.create("chartData6", am4charts.XYChart);
                
                var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
                valueAxisX.renderer.ticks.template.disabled = true;
                valueAxisX.renderer.axisFills.template.disabled = true;
                chart.exporting.menu = new am4core.ExportMenu();
                chart.exporting.menu.align = "right";
                chart.exporting.menu.verticalAlign = "top";
                var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxisY.renderer.ticks.template.disabled = true;
                valueAxisY.renderer.axisFills.template.disabled = true;
                
              
                var series = chart.series.push(new am4charts.LineSeries());
                series.dataFields.valueX = "x";
                series.dataFields.valueY = "y";
                series.dataFields.value = "value";
                series.strokeOpacity = 0;
                series.sequencedInterpolation = true;
                series.tooltip.pointerOrientation = "vertical";
                
                var bullet = series.bullets.push(new am4core.Circle());
                bullet.fill = am4core.color("#ff0000");
                bullet.propertyFields.fill = "color";
                bullet.strokeOpacity = 0;
                bullet.strokeWidth = 1;
                bullet.fillOpacity = 0.5;
                bullet.stroke = am4core.color("#ffffff");
                bullet.hiddenState.properties.opacity = 0;
                bullet.tooltipText = "Time:{time}";
                
                var outline = chart.plotContainer.createChild(am4core.Circle);
                outline.fillOpacity = 0;
                outline.strokeOpacity = 0.8;
                outline.stroke = am4core.color("#ff0000");
                outline.strokeWidth = 2;
                outline.hide(0);
                
                var blurFilter = new am4core.BlurFilter();
                outline.filters.push(blurFilter);
                
                bullet.events.on("over", function(event) {
                    var target = event.target;
                    chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
                    chart.cursor.lineX.y = target.pixelY;
                    chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
                    valueAxisX.tooltip.disabled = false;
                    valueAxisY.tooltip.disabled = false;
                
                    outline.radius = target.pixelRadius + 2;
                    outline.x = target.pixelX;
                    outline.y = target.pixelY;
                    outline.show();
                })
                
                bullet.events.on("out", function(event) {
                    chart.cursor.triggerMove(event.pointer.point, "none");
                    chart.cursor.lineX.y = 0;
                    chart.cursor.lineY.x = 0;
                    valueAxisX.tooltip.disabled = true;
                    valueAxisY.tooltip.disabled = true;
                    outline.hide();
                })
                
                var hoverState = bullet.states.create("hover");
                hoverState.properties.fillOpacity = 1;
                hoverState.properties.strokeOpacity = 1;
                
                series.heatRules.push({ target: bullet, min: 2, max: 10, property: "radius" });
                
                
                
                chart.cursor = new am4charts.XYCursor();
                chart.cursor.behavior = "zoomXY";
                chart.cursor.snapToSeries = series;
                
                chart.scrollbarX = new am4core.Scrollbar();
                chart.scrollbarY = new am4core.Scrollbar();
                
                chart.dataSource.url = "data/data6.csv";
                chart.dataSource.parser = new am4core.CSVParser();
                chart.dataSource.parser.options.useColumnNames = true;
              
              
                });