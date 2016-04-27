{% extends 'common:page/layout.tpl' %}

{% block block_body %}
     <div id="app">

     </div>
{% endblock %}


{% block block_body_js %}


{% script %}
require(["home:page/demo/dialog/dialog.js"] , function(app){
app.init();
});
{% endscript %}


{% endblock %}