const { src, watch, dest } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const jsBundle = () =>
  src([
    './scripts/*.js',
    '!./scripts/modules/*.js',
    '!./scripts/map.js'
  ])
    .pipe(concat('scripts.js'))
    .pipe(dest('dist/js'));

exports.jsBundle = jsBundle;

const cssBundle = () =>
  src([
    './styles/var.css',
    './styles/reset.css',
    './styles/fonts.css',
    './styles/global.css',
    './styles/about-specialist.css',
    './styles/accordion_price-serv.css',
    './styles/accordion.css',
    './styles/achievements.css',
    './styles/all-reviews.css',
    './styles/appointment-form.css',
    './styles/bread-crumbs.css',
    './styles/channel.css',
    './styles/checkboxes.css',
    './styles/coincidence.css',
    './styles/column-list.css',
    './styles/content-part_top-bottom.css',
    './styles/content-part.css',
    './styles/desktop-menu.css',
    './styles/detailed-equipment.css',
    './styles/discount-promo.css',
    './styles/education-specialist.css',
    './styles/equipment.css',
    './styles/filters.css',
    './styles/inform-page.css',
    './styles/job-opportunity.css',
    './styles/mobile-menu.css',
    './styles/modal-slider.css',
    './styles/more-news.css',
    './styles/oft-future.css',
    './styles/online-appointment.css',
    './styles/online-consult.css',
    './styles/our-mission.css',
    './styles/partners.css',
    './styles/photo-slider.css',
    './styles/popular-services.css',
    './styles/pourquoi-nous.css',
    './styles/preparation.css',
    './styles/price.css',
    './styles/reviews.css',
    './styles/select.css',
    './styles/selected-direction.css',
    './styles/seo-text.css',
    './styles/specialists.css',
    './styles/subscribe.css',
    './styles/technology.css',
    './styles/tiled-list.css',
    './styles/university.css',
    './styles/vision.css',
  ])
    .pipe(concat('styles.css'))
    .pipe(autoprefixer())
    .pipe(dest('dist'));

exports.cssBundle = cssBundle;

exports.watch = function() {
  watch('./styles/*.css', cssBundle);
  watch('./scripts/*.js', jsBundle);
};

