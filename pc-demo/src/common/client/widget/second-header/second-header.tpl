
<div class="wdg-second-header">
    <div class="main-section">
        <a href="/" class="brand-logo mt15">
            <img src="/static/img/we-logo.png" alt="logo" />
        </a>
        <ul class="site-nav">
            <li class="user-item fn-clear">
                {% if ! $request.user %}
                    <div class="user-avatar-container fn-left">
                        <img src="/static/img/account/default-avatar-96.png?__inline"  />
                        <div class="avatar-masking"><a href="/account/index.action"></a></div>
                    </div>
                    <div class="user-name fn-clear">
                        <a href="/loginPage.action">我的账户</a>
                    </div>
                {% else %}
                    <div class="user-avatar-container fn-left">
                        <img id="he-userAvatar" src="/static/img/account/default-avatar-96.png?__inline"  />
                        <div class="avatar-masking"><a href="/account/index.action"></a></div>
                        <a href="/account/comm!mail.action" class="msgcount-icon" id="header-msgcount"></a>
                    </div>
                    <div class="user-name fn-clear">
                        <a href="/account/index.action">我的账户</a>
                    </div>
                {% endif %}

            </li>
            <li class="channel-item"><a href="/">首页</a></li>
            <li class="channel-item"><a href="/fund/fundInfoAction!tolist.action?source=tag000001">基金</a></li>
            <li class="channel-item"><a href="/financeplan/listPlan.action">U计划</a></li>
            <li class="channel-item"><a href="/autoinvestplan/listPlan!detailPlan.action">薪计划</a></li>
            <li class="channel-item"><a href="/lend/loanList.action">债权</a></li>

            <li class="channel-item"><a href="/lend/loanList!newComerLoan.action">新手专区</a></li>

        </ul>
    </div>
</div>
<div id="header-helper" style="display: none;">
    <span id="header-helper-authenticated">
        {% if ! $request.user %} false {% else %} true {% endif %}
    </span>
</div>
{% script %}
    require(["common:widget/second-header/second-header"], function(header){
    header.init();
    });
{% endscript %}