import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // --------------------------
:: Template Name: Colorlib App - App Landing Page
:: Template Author: Colorlib
:: Template Author URI: https://colorlib.com/
:: Description: Colorlib is a One Page based App Landing Template. It's very clean, creative & beautiful. It's super     responsive & ultra light.
:: Tags: Colorlib, App Landing, Apps, Responsive App Landing, Bootstrap 4, Free Theme, Free HTML Template, HTML5 Template etc.
:: Version: v1.0
:: Created: 11/03/2017
--------------------------
  // --- [Master Stylesheet] ----
:: 1.0 Base CSS Start
:: 2.0 Header Area CSS
:: 3.0 Wellcome Area CSS
:: 4.0 Special Area CSS
:: 5.0 Features Area CSS
:: 6.0 Video Area CSS
:: 7.0 Cool Facts Area CSS
:: 8.0 Screenshots Area CSS
:: 9.0 Pricing Plan Area CSS
:: 10.0 Testimonials Area CSS
:: 11.0 CTA Area CSS Start
:: 12.0 Team Area CSS Start
:: 13.0 Contact Area CSS Start
:: 14.0 Footer Area CSS Start
--------------------------
  import: 'url('https://fonts.googleapis.com/css?family=Cabin:400,500,700|Montserrat:400,500,700')',
  import: ''css/bootstrap.min.css'',
  import: ''css/animate.css'',
  import: ''css/magnific-popup.css'',
  import: ''css/owl.carousel.min.css'',
  import: ''css/slick.css'',
  import: ''css/font-awesome.min.css'',
  import: ''css/themify-icons.css'',
  import: ''css/ionicons.min.css'',
  // --------------------------
:: 1.0 Base CSS Start
--------------------------
  '*': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  body: {
    fontFamily: ''Cabin', sans-serif',
    backgroundColor: '#fff'
  },
  h1: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  h2: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  h3: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  h4: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  h5: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  h6: {
    fontFamily: ''Cabin', sans-serif',
    fontWeight: '400',
    color: '#000',
    lineHeight: [{ unit: 'px', value: 1.2 }]
  },
  section_padding_100: {
    paddingTop: [{ unit: 'px', value: 100 }],
    paddingBottom: [{ unit: 'px', value: 100 }]
  },
  section_padding_100_50: {
    paddingTop: [{ unit: 'px', value: 100 }],
    paddingBottom: [{ unit: 'px', value: 50 }]
  },
  section_padding_100_70: {
    paddingTop: [{ unit: 'px', value: 100 }],
    paddingBottom: [{ unit: 'px', value: 70 }]
  },
  section_padding_50: {
    paddingTop: [{ unit: 'px', value: 50 }],
    paddingBottom: [{ unit: 'px', value: 50 }]
  },
  section_padding_50_20: {
    paddingTop: [{ unit: 'px', value: 50 }],
    paddingBottom: [{ unit: 'px', value: 20 }]
  },
  section_padding_150: {
    paddingTop: [{ unit: 'px', value: 150 }],
    paddingBottom: [{ unit: 'px', value: 150 }]
  },
  section_padding_200: {
    paddingTop: [{ unit: 'px', value: 200 }],
    paddingBottom: [{ unit: 'px', value: 200 }]
  },
  section_padding_0_100: {
    paddingTop: [{ unit: 'px', value: 0 }],
    paddingBottom: [{ unit: 'px', value: 100 }]
  },
  section_padding_70: {
    paddingTop: [{ unit: 'px', value: 70 }],
    paddingBottom: [{ unit: 'px', value: 70 }]
  },
  section_padding_0_50: {
    paddingTop: [{ unit: 'px', value: 0 }],
    paddingBottom: [{ unit: 'px', value: 50 }]
  },
  img: {
    maxWidth: [{ unit: '%H', value: 1 }],
    maxHeight: [{ unit: '%V', value: 1 }]
  },
  'mt-15': {
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'mt-30': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'mt-40': {
    marginTop: [{ unit: 'px', value: 40 }]
  },
  'mt-50': {
    marginTop: [{ unit: 'px', value: 50 }]
  },
  'mt-100': {
    marginTop: [{ unit: 'px', value: 100 }]
  },
  'mt-150': {
    marginTop: [{ unit: 'px', value: 150 }]
  },
  'mr-15': {
    marginRight: [{ unit: 'px', value: 15 }]
  },
  'mr-30': {
    marginRight: [{ unit: 'px', value: 30 }]
  },
  'mr-50': {
    marginRight: [{ unit: 'px', value: 50 }]
  },
  'mr-100': {
    marginRight: [{ unit: 'px', value: 100 }]
  },
  'mb-15': {
    marginBottom: [{ unit: 'px', value: 15 }]
  },
  'mb-30': {
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'mb-50': {
    marginBottom: [{ unit: 'px', value: 50 }]
  },
  'mb-100': {
    marginBottom: [{ unit: 'px', value: 100 }]
  },
  'ml-15': {
    marginLeft: [{ unit: 'px', value: 15 }]
  },
  'ml-30': {
    marginLeft: [{ unit: 'px', value: 30 }]
  },
  'ml-50': {
    marginLeft: [{ unit: 'px', value: 50 }]
  },
  'ml-100': {
    marginLeft: [{ unit: 'px', value: 100 }]
  },
  ul: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  ol: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '#scrollUp': {
    bottom: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 24 }],
    right: [{ unit: 'px', value: 30 }],
    width: [{ unit: 'px', value: 50 }],
    backgroundColor: '#fb397d',
    color: '#fff',
    textAlign: 'center',
    height: [{ unit: 'px', value: 50 }],
    lineHeight: [{ unit: 'px', value: 50 }]
  },
  'a': {
    textDecoration: 'none',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'a:hover': {
    textDecoration: 'none',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'a:focus': {
    textDecoration: 'none',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'a:active': {
    textDecoration: 'none',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  li: {
    listStyle: 'none'
  },
  'p': {
    color: '#726a84',
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: '300',
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'heading-text > p': {
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'section-heading > h2': {
    fontWeight: '300',
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 48 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'section-heading': {
    marginBottom: [{ unit: 'px', value: 60 }]
  },
  'line-shape-white': {
    width: [{ unit: 'px', value: 80 }],
    height: [{ unit: 'px', value: 2 }],
    backgroundColor: '#fb397d',
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'line-shape': {
    width: [{ unit: 'px', value: 80 }],
    height: [{ unit: 'px', value: 2 }],
    backgroundColor: '#fb397d',
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'line-shape': {
    marginLeft: [{ unit: '%H', value: NaN }]
  },
  table: {
    display: 'table',
    height: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    position: 'relative',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    zIndex: '2'
  },
  'table-cell': {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  '#preloader': {
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    position: 'fixed',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    zIndex: '999999'
  },
  'colorlib-load': {
    WebkitAnimation: '2000ms linear 0s normal none infinite running colorlib-load',
    animation: '2000ms linear 0s normal none infinite running colorlib-load',
    background: 'transparent none repeat scroll 0 0',
    borderColor: '#dddddd #dddddd #fb397d',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '2px',
    height: [{ unit: 'px', value: 40 }],
    left: [{ unit: '%H', value: NaN }],
    position: 'relative',
    top: [{ unit: '%V', value: NaN }],
    width: [{ unit: 'px', value: 40 }],
    zIndex: '9'
  },
  // --------------------------
:: 2.0 Header Area CSS
--------------------------
  header_area: {
    left: [{ unit: 'px', value: 0 }],
    position: 'absolute',
    width: [{ unit: '%H', value: 1 }],
    zIndex: '99',
    top: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: '%H', value: 0.04 }, { unit: 'px', value: 0 }, { unit: '%H', value: 0.04 }]
  },
  'menu_area navbar-brand': {
    fontSize: [{ unit: 'px', value: 72 }],
    fontWeight: '700',
    color: '#fff',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'menu_area navbar-brand:hover': {
    color: '#fff'
  },
  'menu_area navbar-brand:focus': {
    color: '#fff'
  },
  menu_area: {
    position: 'relative',
    zIndex: '2'
  },
  'menu_area #nav nav-link': {
    color: '#fff',
    display: 'block',
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: '500',
    borderRadius: '30px',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms',
    padding: [{ unit: 'px', value: 35 }, { unit: 'px', value: 15 }, { unit: 'px', value: 35 }, { unit: 'px', value: 15 }]
  },
  'menu_area nav ul li > a:hover': {
    color: '#fb397d'
  },
  'sing-up-button': {
    textAlign: 'right'
  },
  'sing-up-button > a': {
    color: '#fff',
    fontWeight: '500',
    display: 'inline-block',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#a883e9' }],
    height: [{ unit: 'px', value: 50 }],
    minWidth: [{ unit: 'px', value: 178 }],
    lineHeight: [{ unit: 'px', value: 46 }],
    textAlign: 'center',
    borderRadius: '24px 24px 24px 0px'
  },
  'sing-up-button > a:hover': {
    background: '#fb397d',
    color: '#fff',
    borderColor: 'transparent',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  // stcicky css
  header_areasticky: {
    backgroundColor: '#884bdf',
    WebkitBoxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 4 }, { unit: 'px', value: 20 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }],
    // NAVBAR ROLVER
    height: [{ unit: 'px', value: 70 }],
    position: 'fixed',
    top: [{ unit: 'px', value: 0 }],
    zIndex: '99'
  },
  'header_areasticky menu_area navbar-brand': {
    fontSize: [{ unit: 'px', value: 50 }]
  },
  'header_areasticky navbar': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  // --------------------------
:: 3.0 Wellcome Area CSS
--------------------------
  wellcome_area: {
    backgroundImage: 'url(img/bg-img/welcome-bg.png)',
    height: [{ unit: 'px', value: 900 }],
    position: 'relative',
    zIndex: '1',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  },
  'wellcome_area:after': {
    position: 'absolute',
    width: [{ unit: '%H', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 2 }],
    backgroundColor: '#fff',
    content: '''',
    bottom: [{ unit: 'px', value: 0 }],
    zIndex: '2'
  },
  'welcome-thumb': {
    width: [{ unit: '%H', value: 0.45 }],
    position: 'absolute',
    bottom: [{ unit: 'px', value: -130 }],
    right: [{ unit: 'px', value: 85 }],
    zIndex: '9'
  },
  'welcome-thumb img': {
    height: [{ unit: 'string', value: 'auto' }],
    width: [{ unit: '%H', value: 1 }]
  },
  'wellcome-heading > h2': {
    fontSize: [{ unit: 'px', value: 100 }],
    color: '#ffffff',
    fontWeight: '700',
    position: 'relative',
    zIndex: '3'
  },
  'get-start-area email': {
    background: '#9572e8',
    height: [{ unit: 'px', value: 50 }],
    maxWidth: [{ unit: 'px', value: 260 }],
    border: [{ unit: 'string', value: 'none' }],
    borderRadius: '24px',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }]
  },
  'form-control::-webkit-input-placeholder': {
    color: '#cec1f4',
    opacity: '1'
  },
  'form-control:-ms-input-placeholder': {
    color: '#cec1f4',
    opacity: '1'
  },
  'form-control::-ms-input-placeholder': {
    color: '#cec1f4',
    opacity: '1'
  },
  'form-control::placeholder': {
    color: '#cec1f4',
    opacity: '1'
  },
  'get-start-area email:focus': {
    border: [{ unit: 'string', value: 'none' }],
    outlineOffset: 'transparent !important',
    borderRadius: '30px'
  },
  'get-start-area submit': {
    backgroundColor: '#fb397d',
    color: '#fff',
    fontWeight: '500',
    display: 'inline-block',
    border: [{ unit: 'string', value: 'none' }],
    height: [{ unit: 'px', value: 50 }],
    minWidth: [{ unit: 'px', value: 167 }],
    lineHeight: [{ unit: 'px', value: 46 }],
    textAlign: 'center',
    borderRadius: '24px 24px 24px 0px',
    marginLeft: [{ unit: 'px', value: 10 }]
  },
  'get-start-area submit:hover': {
    background: '#6f52e5',
    color: '#fff',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'wellcome-heading > p': {
    color: '#fff'
  },
  'wellcome-heading > h3': {
    fontSize: [{ unit: 'px', value: 332 }],
    position: 'absolute',
    top: [{ unit: 'px', value: -134 }],
    fontWeight: '900',
    left: [{ unit: 'px', value: -12 }],
    zIndex: '-1',
    color: '#fff',
    opacity: '.1',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"'
  },
  'wellcome-heading': {
    marginBottom: [{ unit: 'px', value: 100 }]
  },
  // --------------------------
:: 4.0 Special Area CSS
--------------------------
  'single-icon > i': {
    fontSize: [{ unit: 'px', value: 36 }],
    color: '#fb397d'
  },
  'single-special > h4': {
    fontSize: [{ unit: 'px', value: 22 }],
    color: '#5b32b4'
  },
  'single-icon': {
    marginBottom: [{ unit: 'px', value: 25 }]
  },
  'single-special > h4': {
    fontSize: [{ unit: 'px', value: 22 }],
    color: '#5b32b4',
    marginBottom: [{ unit: 'px', value: 15 }]
  },
  'single-special': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eff2f6' }],
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 40 }, { unit: 'px', value: 40 }, { unit: 'px', value: 40 }],
    borderRadius: '40px 40px 40px 0px',
    WebkitTransitionDuration: '800ms',
    OTransitionDuration: '800ms',
    transitionDuration: '800ms',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'special_description_content > h2': {
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 48 }],
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'single-special:hover': {
    WebkitBoxShadow: '0 10px 90px rgba(0, 0, 0, 0.08)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 90 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.08)' }]
  },
  'single-special p': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'app-download-area': {
    display: '-moz-flex',
    display: '-ms-flex',
    display: '-o-flex',
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    MsFlexPreferredSize: '1',
    flexBasis: '1',
    marginTop: [{ unit: 'px', value: 50 }]
  },
  'app-download-btn a': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 30 }, { unit: 'px', value: 15 }, { unit: 'px', value: 30 }],
    borderRadius: '30px 30px 30px 0',
    WebkitBoxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 30 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }],
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center'
  },
  'app-download-btnactive a': {
    borderColor: 'transparent',
    backgroundColor: '#fb397d'
  },
  'app-download-btn a:hover': {
    borderColor: 'transparent',
    backgroundColor: '#fb397d'
  },
  'app-download-btn a i': {
    color: '#47425d',
    fontSize: [{ unit: 'px', value: 24 }],
    marginRight: [{ unit: 'px', value: 15 }],
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'app-download-btn a p': {
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 1 }],
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'app-download-btn a p span': {
    fontSize: [{ unit: 'px', value: 12 }],
    display: 'block'
  },
  'app-download-btn:first-child': {
    marginRight: [{ unit: 'px', value: 20 }]
  },
  'app-download-btn a:hover i': {
    color: '#fff'
  },
  'app-download-btnactive a i': {
    color: '#fff'
  },
  'app-download-btnactive a p': {
    color: '#fff'
  },
  'app-download-btn a:hover p': {
    color: '#fff'
  },
  // --------------------------
:: 5.0 Features Area CSS
--------------------------
  'single-feature': {
    marginBottom: [{ unit: 'px', value: 50 }]
  },
  'single-feature > p': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'single-feature > i': {
    color: '#fb397d',
    fontSize: [{ unit: 'px', value: 30 }],
    display: 'inline-block',
    float: 'left',
    marginRight: [{ unit: 'px', value: 10 }]
  },
  'single-feature > h5': {
    fontSize: [{ unit: 'px', value: 22 }],
    color: '#5b32b4'
  },
  'single-feature > p': {
    marginTop: [{ unit: 'px', value: 15 }]
  },
  // --------------------------
:: 6.0 Video Area CSS
--------------------------
  'video-area': {
    position: 'relative',
    zIndex: '1',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    border: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    borderRadius: '20px',
    height: [{ unit: 'px', value: 650 }],
    WebkitBoxShadow: '0 10px 50px rgba(0, 0, 0, 0.08)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 50 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.08)' }]
  },
  'video-area:after': {
    position: 'absolute',
    content: '""',
    top: [{ unit: 'px', value: -20 }],
    left: [{ unit: 'px', value: -20 }],
    width: [{ unit: '%H', value: NaN }],
    height: [{ unit: '%V', value: NaN }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f1f4f8' }],
    zIndex: '2',
    borderRadius: '20px'
  },
  'video-area video-play-btn a': {
    width: [{ unit: 'px', value: 80 }],
    height: [{ unit: 'px', value: 80 }],
    backgroundColor: '#fb397d',
    color: '#fff',
    textAlign: 'center',
    display: 'block',
    fontSize: [{ unit: 'px', value: 36 }],
    lineHeight: [{ unit: 'px', value: 80 }],
    paddingLeft: [{ unit: 'px', value: 5 }],
    borderRadius: '50%',
    top: [{ unit: '%V', value: 0.5 }],
    position: 'absolute',
    left: [{ unit: '%H', value: 0.5 }],
    WebkitTransform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    zIndex: '3'
  },
  'video-area video-play-btn a:hover': {
    backgroundColor: '#a865e1',
    color: '#fff'
  },
  // --------------------------
:: 7.0 Cool Facts Area CSS
--------------------------
  cool_facts_area: {
    position: 'relative',
    zIndex: 'auto',
    background: '#a865e1',
    background: '-webkit-linear-gradient(to left, #7873ed, #a865e1)',
    background: '-webkit-linear-gradient(right, #7873ed, #a865e1)',
    background: '-webkit-gradient(linear, right top, left top, from(#7873ed), to(#a865e1))',
    background: '-o-linear-gradient(right, #7873ed, #a865e1)',
    background: 'linear-gradient(to left, #7873ed, #a865e1)',
    padding: [{ unit: 'px', value: 180 }, { unit: 'px', value: 0 }, { unit: 'px', value: 80 }, { unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: -100 }]
  },
  'cool_facts_area:after': {
    position: 'absolute',
    bottom: [{ unit: 'px', value: -100 }],
    left: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 100 }],
    backgroundColor: '#fff',
    content: ''''
  },
  'cool-facts-content > i': {
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 36 }]
  },
  'counter-area': {
    minWidth: [{ unit: 'px', value: 100 }],
    MsFlexItemAlign: 'end',
    alignSelf: 'flex-end'
  },
  'counter-area > h3': {
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 60 }],
    marginBottom: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }]
  },
  'cool-facts-content > p': {
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#ffffff',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  // --------------------------
:: 8.0 Screenshots Area CSS
--------------------------
  app_screenshots_slides: {
    padding: [{ unit: 'px', value: 0 }, { unit: '%H', value: 0.06 }, { unit: 'px', value: 0 }, { unit: '%H', value: 0.06 }]
  },
  'app_screenshots_slides single-shot': {
    opacity: '0.7',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)"',
    WebkitTransform: 'scale(0.85)',
    MsTransform: 'scale(0.85)',
    transform: 'scale(0.85)'
  },
  'app_screenshots_slides center single-shot': {
    opacity: '1',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',
    WebkitTransform: 'scale(1)',
    MsTransform: 'scale(1)',
    transform: 'scale(1)'
  },
  'app-screenshots-area owl-dot': {
    height: [{ unit: 'px', value: 11 }],
    width: [{ unit: 'px', value: 11 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#a49fba' }],
    borderRadius: '50%',
    display: 'inline-block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 6 }, { unit: 'px', value: 0 }, { unit: 'px', value: 6 }],
    marginTop: [{ unit: 'px', value: 50 }]
  },
  'app-screenshots-area owl-dotactive': {
    backgroundColor: '#fb397d',
    border: [{ unit: 'string', value: 'transparent' }]
  },
  'app-screenshots-area owl-dots': {
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    textAlign: 'center'
  },
  // --------------------------
:: 9.0 Pricing Plan Area CSS
--------------------------
  'pricing-plane-area': {
    background: '#f5f9fc'
  },
  'single-price-plan': {
    background: '#ffffff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }],
    borderRadius: '30px 30px 30px 0',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'single-price-plan package-plan': {
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }, { unit: 'px', value: 0 }],
    borderRadius: '30px 30px 0 0'
  },
  'single-price-plan package-plan > h5': {
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 18 }]
  },
  'single-price-plan package-plan ca-price h4': {
    color: '#fb397d',
    fontSize: [{ unit: 'px', value: 48 }],
    position: 'relative',
    zIndex: '1',
    marginBottom: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }]
  },
  'single-price-plan package-plan ca-price span': {
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#fb397d'
  },
  'single-price-plan plan-button > a': {
    background: '#726a84',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    borderBottomRightRadius: '30px',
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: '500',
    display: 'block',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'single-price-plan package-description > p': {
    marginBottom: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }]
  },
  'single-price-plan package-description > p:first-child': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }]
  },
  'single-price-planactive package-plan': {
    backgroundColor: '#a865e1'
  },
  'single-price-planactive plan-button > a': {
    backgroundColor: '#a865e1'
  },
  'single-price-plan:hover plan-button > a': {
    backgroundColor: '#a865e1'
  },
  'single-price-planactive package-plan ca-price > h4': {
    color: '#fff'
  },
  'single-price-planactive package-plan ca-price > span': {
    color: '#fff'
  },
  'single-price-planactive package-plan > h5': {
    color: '#fff'
  },
  'single-price-planactive plan-button > a': {
    color: '#fff'
  },
  // --------------------------
:: 10.0 Testimonials Area CSS
--------------------------
  'clients-feedback-area client-name > h5': {
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 22 }],
    marginTop: [{ unit: 'px', value: 5 }]
  },
  'clients-feedback-area star-icon > i': {
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#f1b922'
  },
  'clients-feedback-area client-description > p': {
    maxWidth: [{ unit: 'px', value: 1010 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    marginBottom: [{ unit: 'px', value: 15 }],
    fontSize: [{ unit: 'px', value: 22 }]
  },
  'clients-feedback-area client > i': {
    fontSize: [{ unit: 'px', value: 48 }],
    color: '#897ceb',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'clients-feedback-area client-name > p': {
    color: '#b5aec4'
  },
  'clients-feedback-area slick-dots': {
    display: '-moz-flex',
    display: '-ms-flex',
    display: '-o-flex',
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center'
  },
  'clients-feedback-area slick-dots li button': {
    width: [{ unit: 'px', value: 12 }],
    height: [{ unit: 'px', value: 12 }],
    textIndent: '-999999999999999999999999px',
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#a49fba' }],
    backgroundColor: '#fff',
    borderRadius: '50%',
    margin: [{ unit: 'px', value: 5.5 }, { unit: 'px', value: 5.5 }, { unit: 'px', value: 5.5 }, { unit: 'px', value: 5.5 }],
    outline: 'none'
  },
  'clients-feedback-area slick-dots lislick-active button': {
    backgroundColor: '#fb397d',
    borderColor: '#fb397d'
  },
  'clients-feedback-area slick-slideclient-thumbnail': {
    display: '-moz-flex',
    display: '-ms-flex',
    display: '-o-flex',
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
    height: [{ unit: 'px', value: 129 }]
  },
  'clients-feedback-area slick-slide img': {
    display: 'block',
    width: [{ unit: 'px', value: 80 }, { unit: 'string', value: '!important' }],
    height: [{ unit: 'px', value: 80 }, { unit: 'string', value: '!important' }],
    borderRadius: '50%',
    border: [{ unit: 'px', value: 5 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    WebkitBoxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 4 }, { unit: 'px', value: 20 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }]
  },
  'clients-feedback-area slick-slideslick-current img': {
    width: [{ unit: 'px', value: 100 }, { unit: 'string', value: '!important' }],
    height: [{ unit: 'px', value: 100 }, { unit: 'string', value: '!important' }]
  },
  'clients-feedback-area slick-arrow': {
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    backgroundColor: '#fff',
    height: [{ unit: '%V', value: 1 }],
    textAlign: 'center',
    fontSize: [{ unit: 'px', value: 24 }],
    color: '#b5aec4',
    display: 'block',
    lineHeight: [{ unit: '%V', value: 5.5 }],
    left: [{ unit: 'px', value: 0 }],
    zIndex: '90',
    cursor: 'pointer'
  },
  'clients-feedback-area slick-arrowfa-angle-right': {
    left: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }]
  },
  // --------------------------
:: 11.0 CTA Area CSS Start
--------------------------
  'our-monthly-membership': {
    background: '#a865e1',
    background: '-webkit-linear-gradient(to left, #7873ed, #a865e1)',
    background: '-webkit-linear-gradient(right, #7873ed, #a865e1)',
    background: '-webkit-gradient(linear, right top, left top, from(#7873ed), to(#a865e1))',
    background: '-o-linear-gradient(right, #7873ed, #a865e1)',
    background: 'linear-gradient(to left, #7873ed, #a865e1)'
  },
  'membership-description > h2': {
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 36 }]
  },
  'membership-description > p': {
    color: '#ffffff',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'get-started-button > a': {
    background: '#ffffff',
    height: [{ unit: 'px', value: 45 }],
    minWidth: [{ unit: 'px', value: 155 }],
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: [{ unit: 'px', value: 45 }],
    color: '#fb397d',
    fontWeight: '500',
    borderRadius: '23px 23px 23px 0'
  },
  'get-started-button > a:hover': {
    background: '#5b32b4',
    color: '#fff',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'get-started-button': {
    textAlign: 'right'
  },
  // --------------------------
:: 12.0 Team Area CSS Start
--------------------------
  'member-image': {
    marginBottom: [{ unit: 'px', value: 30 }],
    borderRadius: '30px 30px 30px 0',
    position: 'relative',
    zIndex: '1'
  },
  'member-image img': {
    borderRadius: '30px 30px 30px 0'
  },
  'member-text > h4': {
    fontSize: [{ unit: 'px', value: 22 }],
    color: '#5b32b4'
  },
  'member-text > p': {
    color: '#b5aec4',
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'team-hover-effects': {
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    backgroundColor: 'rgba(105, 75, 228, 0.8)',
    borderRadius: '30px 30px 30px 0',
    opacity: '0',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',
    WebkitTransition: 'all 500ms',
    OTransition: 'all 500ms',
    transition: 'all 500ms'
  },
  'single-team-member:hover team-hover-effects': {
    opacity: '1',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"'
  },
  'team-social-icon': {
    position: 'absolute',
    zIndex: '5',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center'
  },
  'team-social-icon > a': {
    fontSize: [{ unit: 'px', value: 14 }],
    color: '#fff',
    background: '#9a81d7',
    height: [{ unit: 'px', value: 40 }],
    width: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    textAlign: 'center',
    borderRadius: '10px 10px 10px 0',
    display: 'block',
    margin: [{ unit: 'px', value: 2.5 }, { unit: 'px', value: 2.5 }, { unit: 'px', value: 2.5 }, { unit: 'px', value: 2.5 }]
  },
  'single-team-member': {
    marginBottom: [{ unit: 'px', value: 50 }]
  },
  // --------------------------
:: 13.0 Contact Area CSS Start
--------------------------
  'address-text > p': {
    fontSize: [{ unit: 'px', value: 18 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'phone-text > p': {
    fontSize: [{ unit: 'px', value: 18 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'email-text > p': {
    fontSize: [{ unit: 'px', value: 18 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'address-text > p > span': {
    color: '#5b32b4'
  },
  'phone-text > p > span': {
    color: '#5b32b4'
  },
  'email-text > p > span': {
    color: '#5b32b4'
  },
  'footer-contact-area line-shape': {
    marginLeft: [{ unit: 'px', value: 0 }]
  },
  'footer-contact-area heading-text > p': {
    marginTop: [{ unit: 'px', value: 50 }]
  },
  'footer-contact-area heading-text': {
    marginBottom: [{ unit: 'px', value: 50 }]
  },
  '#name': {
    fontSize: [{ unit: 'px', value: 18 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }],
    borderRadius: '25px 25px 25px 0'
  },
  '#email': {
    fontSize: [{ unit: 'px', value: 18 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }],
    borderRadius: '25px 25px 25px 0'
  },
  '#message': {
    borderRadius: '25px 25px 25px 0'
  },
  'btnsubmit-btn': {
    background: '#fb397d',
    height: [{ unit: 'px', value: 48 }],
    minWidth: [{ unit: 'px', value: 185 }],
    color: '#ffffff',
    fontWeight: '500',
    borderRadius: '22px 25px 22px 0'
  },
  'btnsubmit-btn:hover': {
    background: '#5b32b4',
    color: '#fff',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'footer-contact-area': {
    background: '#f5f9fc'
  },
  'footer-text > p': {
    marginBottom: [{ unit: 'px', value: 50 }]
  },
  // --------------------------
:: 14.0 Footer Area CSS Start
--------------------------
  'footer-text > h2': {
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 72 }],
    fontWeight: '700'
  },
  'footer-social-icon > a > i': {
    background: '#9b69e4',
    fontSize: [{ unit: 'px', value: 14 }],
    color: '#ffffff',
    height: [{ unit: 'px', value: 40 }],
    width: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    fontWeight: '500',
    borderRadius: '10px 10px 10px 0px',
    marginRight: [{ unit: 'px', value: 10 }]
  },
  'footer-social-icon > a > i:hover': {
    background: '#fb397d',
    color: '#fff',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'social-icon': {
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'footer-text': {
    marginBottom: [{ unit: 'px', value: 15 }]
  },
  'footer-menu ul li': {
    display: 'inline-block'
  },
  'footer-menu ul li a': {
    borderRight: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#726a84' }],
    display: 'block',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 7.5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 7.5 }],
    color: '#726a84'
  },
  'footer-social-icon > a active': {
    background: '#fb397d'
  },
  'footer-menu ul li:last-child a': {
    borderRight: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }]
  },
  'footer-social-icon': {
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'footer-menu': {
    marginBottom: [{ unit: 'px', value: 15 }]
  },
  'copyright-text > p': {
    marginBottom: [{ unit: 'px', value: 0 }]
  }
});
