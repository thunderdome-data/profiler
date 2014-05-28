(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['display-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"detailcon\">\n	<div id=\"prevbtn\"><a href=\"javascript:photoGrid.prevPerson()\">«</a></div>\n	<div id=\"closebtn\">X</div>\n	<div id=\"photocon\"><img width=\"115\" height=\"135\" src=\"imgs/";
  if (helper = helpers.photo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.photo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n	<div style=\"float: left\">\n		<div id=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div id=\"data1\" class=\"dataDisp\"><p>Data 1: ";
  if (helper = helpers.data1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></div>\n		<div id=\"data2\" class=\"dataDisp\"><p>Data 2: ";
  if (helper = helpers.data2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></div>\n		<div id=\"data3\" class=\"dataDisp\"><p>Data 3: ";
  if (helper = helpers.data3) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data3); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></div>\n	</div>\n	<div style=\"clear:both\"></div>\n	<div id=\"blurb\">";
  if (helper = helpers.blurb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.blurb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n	<div id=\"nextbtn\"><a href=\"javascript:photoGrid.nextPerson()\">»</a></div>\n</div>";
  return buffer;
  });
})();