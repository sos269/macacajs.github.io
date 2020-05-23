(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"browser-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-testing"}},[t._v("#")]),t._v(" Browser Testing")]),t._v(" "),a("p",[t._v("This document describes how to test desktop browser compatibility.")]),t._v(" "),a("h2",{attrs:{id:"multi-browser-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-browser-support"}},[t._v("#")]),t._v(" Multi-Browser Support")]),t._v(" "),a("p",[t._v("Run "),a("a",{attrs:{href:"//github.com/vvo/selenium-standalone"}},[t._v("selenium-standalone")]),t._v(" on the desktop to drive desktop browser. "),a("a",{attrs:{href:"//github.com/vvo/selenium-standalone"}},[t._v("selenium-standalone")]),t._v(" is a command line program to install and launch the selenium standalone server, chrome driver, internet explorer driver, and firefox driver.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("selenium-standalone "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --drivers.firefox.baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://npm.taobao.org/mirrors/geckodriver --baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://npm.taobao.org/mirrors/selenium --drivers.chrome.baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://npm.taobao.org/mirrors/chromedriver --drivers.ie.baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://npm.taobao.org/mirrors/selenium\n")])])]),a("h2",{attrs:{id:"private-cloud-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-cloud-deployment"}},[t._v("#")]),t._v(" Private Cloud Deployment")]),t._v(" "),a("p",[a("a",{attrs:{href:"//github.com/alibaba/f2etest"}},[t._v("F2ETest DOC")]),t._v(" supports private deployment of servers, and is the overall solution for multi-browser compatibility testing")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/6d308bd9gy1feru097e8cj20sw0dcagm.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Various types of desktop browsers can be tested with the following configuration:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'macaca-wd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remoteConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4444")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" driver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promiseChainRemote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remoteConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  platformName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'desktop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  browserName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f2etest.userid'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f2etest.apiKey'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);