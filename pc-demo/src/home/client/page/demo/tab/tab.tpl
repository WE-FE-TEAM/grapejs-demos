{% extends 'common:page/layout.tpl' %}

{% block block_body %}
     <div id="app" class="main-section">

     </div>
{% endblock %}


{% block block_body_js %}


{% script %}
require(["home:page/demo/tab/tab.js"] , function(app){
app.init();
});
{% endscript %}


{% endblock %}