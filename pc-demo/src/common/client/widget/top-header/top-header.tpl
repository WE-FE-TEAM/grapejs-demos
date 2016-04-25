
<div class="wdg-top-header">
    <div class="main-section">
        <span class="tel-phone"><i class="icon-phone"></i>客服电话: 400-090-6600</span>
        <ul class="site-nav">
            {% if ! $request.user %}
                <li class="nav-item"><a target="_self" href="/loginPage.action">立即登录</a></li>
                <li class="nav-item-split"></li>
                <li class="nav-item"><a target="_self" href="/regPage.action?registerSource=web_top">快速注册</a></li>
                <li class="nav-item-split"></li>
            {% else %}
                <li class="nav-item"><a target="_self" href="/account/index.action">{{ $request.user.displayName }}</a></li>
                <li class="nav-item">&nbsp;&nbsp;[<a target="_self" href="/j_spring_security_logout">退出</a>]</li>
                <li class="nav-item-split"></li>
            {% endif %}

            <li class="nav-item"><a target="_blank" href="/about/about.action?flag=intro">关于我们</a></li>
            <li class="nav-item-split"></li>
            <li class="nav-item"><a target="_blank" href="/help/index.action">帮助中心</a></li>
            <li class="nav-item-split"></li>
            <li class="nav-item"><a target="_blank" href="http://bbs.we.com/">理财论坛</a></li>
            <li class="nav-item-split"></li>
            <li class="nav-item"><i class="icon-mobile3"></i><a target="_blank" href="/event/app.action">移动客户端</a></li>
        </ul>
    </div>
</div>