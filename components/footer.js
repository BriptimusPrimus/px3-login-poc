"use strict";

/* 
<footer id="footer" class="footer">
    <ul class="footerGroup">
        <li>
            <a href="link1">link1</a>
        </li>
        <li>
            <a href="link2">link2</a>
        </li>
        <li>
            <a href="link3">link3</a>
        </li>
        <li>
            <a href="link4">link4</a>
        </li>                        
    </ul>
</footer> 
*/

window.app = window.app || {};
app.components = app.components || {};

app.components.Footer = function Footer() {

    // .footer {
    //     position: fixed;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     font-size: 11px;
    //     padding: 14px;
    //     text-align: center;
    //     background-color: #F7F9FA;
    // }
    var footerStyle = 'position: fixed;bottom: 0;left: 0;right: 0;font-size: 11px;' +
        'padding: 14px;text-align: center;background-color: #F7F9FA;';

    // .footerGroup {
    //     list-style-type: none;
    //     text-align: center;
    // }
    var ulStyle = 'list-style-type: none;text-align: center;';
        
    // .footerGroup li {
    //     display: inline-block;
    //     margin: 0 10px 0 0;
    // }
    var liStyle = 'display: inline-block;margin: 0 10px 0 0;color: #666;white-space: nowrap;';

    // .footerGroup li a {
    //     color: #666;
    //     white-space: nowrap;
    // }
    var aStyle = 'color: #666;white-space: nowrap;';

    var footerLinks = [
        app.$$$.dom('li', {
            style: liStyle
        }, [
          app.$$$.dom('a', {
              href: 'link1',
              style: aStyle
          }, 'link1')
        ]),

        app.$$$.dom('li', {
            style: liStyle
        }, [
          app.$$$.dom('a', {
              href: 'link2',
              style: aStyle
          }, 'link2')
        ]),

        app.$$$.dom('li', {
            style: liStyle
        }, [
          app.$$$.dom('a', {
              href: 'link3',
              style: aStyle
          }, 'link3')
        ]),

        app.$$$.dom('li', {
            style: liStyle
        }, [
          app.$$$.dom('a', {
              href: 'link4',
              style: aStyle
          }, 'link4')
        ])
    ];

    return app.$$$.dom(
        'footer', {
            id: 'footer',
            'class': 'footer',
            style: footerStyle
        }, [
            app.$$$.dom('ul', {
                    'class': 'footerGroup',
                    style: ulStyle
                },
                footerLinks
            )
        ]
    );
}