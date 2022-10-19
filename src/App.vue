<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: {
    AppHeader,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap");
// * Reset
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

input,
textarea {
  border: none;
  background-color: transparent;
}

textarea {
  resize: none;
}

address,
cite {
  font-style: normal;
}

html {
  scroll-behavior: smooth;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

// Удалить стрелку у type = number
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

// Удалить крестик у инпута серч
input[type="text"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type="text"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

// Color
:root {
  --color-black: #000;
  --color-white: #fff;

  --color-dark: #34393d;
  --color-bg: #fffbf6;
  --color-accent: #7f9a5e;
}

// * breakpointsMaxW
$bp-container: 1100px;
$bp-991: 991.98px;
$bp-768: 767.98px;
$bp-576: 576px;
$bp-360: 359.98px;

// *=== Fonts
$Forum: "Forum";
$PTRootUI: "PT Root UI";

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1 auto;
}

@mixin breakpointsMaxW($bp) {
  @media (max-width: $bp) {
    @content;
  }
}

@mixin breakpointsMinW($bp) {
  @media (min-width: $bp) {
    @content;
  }
}

@mixin breakpointsMaxH($bp) {
  @media (max-height: $bp) and (orientation: landscape) {
    @content;
  }
}

@mixin afterIcon($image, $w, $h) {
  background-image: $image;
  width: $w;
  height: $h;
}

@mixin background($size) {
  background: {
    repeat: no-repeat;
    position: center;
    size: $size;
  }
}

@mixin img($size) {
  width: 100%;
  height: 100%;
  object-fit: $size;
}

@mixin backgroundImage($image, $size) {
  background: {
    image: $image;
    repeat: no-repeat;
    position: center;
    size: $size;
  }
}

@mixin maskImage($image, $size) {
  mask: $image no-repeat center/$size;
}

@mixin elDef() {
  position: absolute;
  content: "";
}

@mixin line-clamp($lines: 1) {
  @if $lines <=1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
  }
}

$maxWidth: 1920;
$maxWidthContainer: 1270;

@mixin adaptive-value($property, $starSize, $minSize, $type) {
  $addSize: $starSize - $minSize;

  @if $type==1 {
    #{$property}: $starSize + px;

    @media (max-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} *
          ((100vw - 360px) / #{$maxWidthContainer - 360})
      );
    }
  } @else if $type==2 {
    #{$property}: $starSize + px;

    @media (min-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} * ((100vw - 360px) / #{$maxWidth - 360})
      );
    }
  } @else {
    #{$property}: calc(
      #{$minSize + px} + #{$addSize} * ((100vw - 360px) / #{$maxWidth - 360})
    );
  }
}

body {
  font-family: "Fuzzy Bubbles", sans-serif;
  line-height: 1.5;
  font-size: 16px;
  background-color: #f1f1f1;
}

.container {
  max-width: $bp-container;
  padding: 0px 15px;
  margin: 0 auto;
}

// * Кнопки
.btn {
  display: inline-block;
  line-height: 1;
  background-color: rebeccapurple;
  color: var(--color-white);
  transition: 200ms ease;
  padding: 10px 20px;
  border-radius: 28px;
  border: 2px solid rebeccapurple;
  text-align: center;

  &:hover {
    background-color: var(--color-white);
    color: rebeccapurple;
  }

  &:active {
    transform: scale(0.98);
  }
}

.section {
  padding: 50px 0;
}

.section-title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
}
</style>
