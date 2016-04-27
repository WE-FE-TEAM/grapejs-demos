
<div class="ui-footer" id="footer">
    <div class="main-section">
        {% widget "common:widget/friend-link/friend-link.tpl" %}
        <i class="icon icon-footer-snow-down"></i>
        <div class="ui-footer-section ui-footer-links second">
            <ul class="fn-clear">
                <li class="fn-left">
                    <h4 class="color-gray-text text-big w100">
                        <a class="gray" target="_blank" href="/about/about.action?flag=intro">公司介绍</a></h4>
                </li>
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/guide/investSecurity.action">安全保障</a>
                </li>
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/about/about.action?flag=report">媒体报道</a>
                </li>
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/about/about.action?flag=responsibility">社会责任</a>
                </li>
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/about/about.action?flag=invite">招贤纳士</a>
                </li>
                {# <li class="fn-left">
                <a class="gray" target="_blank" href="/sitemap.action">网站地图</a>
            </li> #}
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/help/index.action">帮助中心</a>
                </li>
                <li class="fn-left">
                    <a class="gray" target="_blank" href="/about/about.action?flag=contact">联系我们</a>
                </li>
            </ul>
            <ul class="fn-clear icons">
                <li class="fn-left">
                    <h4 class="color-gray-text text-big w100">客户服务</h4>
                </li>
                <li class="fn-left"><a id="wexinBtn" class="gray" href="javascript:;" tabindex="-1">
                    <i class="icon we-chat"></i>微信</a></li>
                <li class="fn-left"><a class="gray" target="_blank" href="http://e.weibo.com/renrendai?ref=http%3A%2F%2Fwww.renrendai.com%2F"><i class="icon weibo"></i>新浪微博</a></li>
                <li class="fn-left"><a class="gray cursor-pointer" target="_blank" onclick="online_service();"><i class="icon online-customer-service"></i>在线客服</a></li>
            </ul>
            <ul class="fn-clear service">
                <li class="fn-left">
                    <h4 class="color-gray-text text-big w100">客服电话</h4>
                </li>
                <li class="fn-left ui-footer-phone-number">400-090-6600</li>
                <li class="fn-left">9:00 - 21:00</li>
            </ul>
            <div class="weixin fn-clear">
                <dl class="fn-left">
                    <dd><img src="./assets/we-weixing.png" alt=""></dd>
                    <dt>关注微信账号</dt>
                </dl>
                <dl class="fn-left app-down">
                    <dd><img src="./assets/app-weixin.png" alt=""></dd>
                    <dt>下载手机app</dt>
                </dl>
            </div>
        </div>
        <div class="ui-footer-section">
            <div class="ui-footer-copyright">
                <span class="ui-footer-contact-link color-gray-text">© {{ tpl_now | date_format('YYYY') }} 人人贷 All rights reserved</span>
                <span class="ui-footer-contact-link color-gray-text has-separator">人人贷商务顾问(北京)有限公司</span>
                <span class="ui-footer-contact-link color-gray-text has-separator"><a class="gray" target="_blank" href="/icp/icp.html">京ICP证 100953号</a></span>
                <span class="ui-footer-contact-link color-gray-text has-separator">京公网安备11010502020657</span>
                <span class="ui-footer-contact-link color-gray-text has-separator last">京ICP备12025643号-1</span>
            </div>
            <div class="ui-footer-verification fn-clear">
                <a class="ui-footer-verification-item fn-left credibility" title="人人贷WE理财荣获中国电子商务协会“诚信网站”认证殊荣" id='___szfw_logo___' href='https://credit.szfw.org/CX20151016011685230181.html' target='_blank'></a>
                <a class="ui-footer-verification-item fn-left trust" id="kx_verify" href="https://ss.knet.cn/verifyseal.dll?sn=e15112011010561538m3ux000000&ct=df&a=1&pa=0.6757671611849219"title="人人贷WE理财已通过中网权威数据库对比，获得“可信网站”身份验证，您可放心使用。"  target="_blank">
                </a>
                <a class="ui-footer-verification-item fn-left internet" href="http://si.trustutn.org/info?sn=339151201000317676777" title="人人贷WE理财已通过认证联盟权威数据库对比，获得“互联网金融行业认证”，您可放心使用。" target="_blank"></a>
                <a class="ui-footer-verification-item fn-left itrust" title="人人贷WE理财已经成为中国互联网信用评价中心网络诚信联盟成员，并且完成企业信用评级 " href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1012817080" target="_blank"></a>
                <a class="ui-footer-verification-item fn-left norton" title="人人贷WE理财已引入VeriSign SSL加密技术，您的隐私及个人资料安全已受最高级别的保护。" href="https://trustsealinfo.websecurity.norton.com/splash?form_file=fdf/splash.fdf&dn=www.we.com&lang=zh_cn" target="_blank" ></a>
                <!-- <a class="ui-footer-verification-item fn-left police" title="人人贷已经完成在公安机关的信息备案，您可了解网站相关备案信息。" href="http://gawa.bjchy.gov.cn/websearch/" target="_blank"></a>
                <a class="ui-footer-verification-item fn-left gongshang" title="人人贷已经完成在北京市工商局网站备案，您可了解网站相关备案信息。" href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202013052900002" target="_blank"></a> -->
            </div>
        </div>
    </div>
</div>

<ul class="fixed-download-goBack">
    <li class="fixed-calculator">
        <a class="fixed-icon" target="_blank" href="/lend/calculator.action?prodType=Loanplan"></a>
    </li>
    <li class="fixed-service">
        <a class="fixed-icon" href="javascript:" onclick="online_service();"></a>
    </li>
    <li class="fixed-download">
        <a class="fixed-icon" href="javascript:"></a>
        <div class="download-app-wrap-opacity">
            <div class="fixed-arrow"></div>
        </div>
        <div class="download-app-wrap">
            <h2>人人贷WE理财APP下载</h2>
            <div class="fn-clear">
                <div class="ewm-big">
                    <img src="assets/ewm-big.png?__inline" alt="二维码" />
                </div>
                <div class="download-btns">
                    <a target="_blank" class="ios" href="http://itunes.apple.com/us/app/id883561142?mt=8"><img src="assets/ios.png?__inline" alt="ios下载" /></a>
                    <a target="_blank" href="http://www.we.com/event/download.action?type=apk"><img src="assets/android.png?__inline" alt="android下载" /></a>
                </div>
            </div>
        </div>
    </li>
    <li class="fixed-goTop">
        <a class="fixed-icon" href="javascript:"></a>
    </li>
</ul>

<div class="fn-hide">
    <div id="weixin-content" class="p20 text-center">
        <img src="/client/static/img/weixin_l.jpg" style="width:250px" />
        <p>微信扫一扫，人人贷We理财里动态全知道！</p>
    </div>
</div>


<script type='text/javascript'>
    function online_service() {
        {% if ! $request.user %}
            window.open('http://chat.looyuoms.com/chat/chat/p.do?c=20000293&f=10042100&g=10048378&site=5372&r=%23params%3A姓名%2C游客', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
        {% else %}
            window.open('http://chat.looyuoms.com/chat/chat/p.do?c=20000293&f=10042100&g=10048378&site=5372&r=%23params%3AuserId%2C{{ $request.user.getUserId() }}%2C姓名%2C{{ $request.user.getDisplayName() }}', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
        {% endif %}
    }

</script>

{% script %}
    require(["common:widget/footer/footer"], function(){});
{% endscript %}