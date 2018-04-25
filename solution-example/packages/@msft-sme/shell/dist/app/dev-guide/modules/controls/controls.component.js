import { Component } from '@angular/core';
var ControlsComponent = (function () {
    function ControlsComponent() {
    }
    ControlsComponent.navigationTitle = function (appContextService, snapshot) {
        return 'controls';
    };
    return ControlsComponent;
}());
export { ControlsComponent };
ControlsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sme-ng2-controls',
                template: "\n      <div class=\"m-l-xxs tool-container flex-layout\">\n        <nav role=\"navigation\" class=\"nav side-navigation side-navigation-large theme-default fixed-flex-size p-r-xs vertical-scroll-only\">\n          <ul>\n            <li><a routerLink=\"actions\" routerLinkActive=\"active\">actions</a></li>\n            <li><a routerLink=\"alert-bar\" routerLinkActive=\"active\">alert-bar</a></li>\n            <li><a routerLink=\"breadcrumb-header\" routerLinkActive=\"active\">breadcrumb-header</a></li>\n            <li><a routerLink=\"data-table\" routerLinkActive=\"active\">data-table</a></li>\n            <li><a routerLink=\"details\" routerLinkActive=\"active\">details</a></li>\n            <li><a routerLink=\"dialog\" routerLinkActive=\"active\">dialog</a></li>\n            <li><a routerLink=\"dropdown\" routerLinkActive=\"active\">dropdown</a></li>\n            <li><a routerLink=\"doughnut-chart\" routerLinkActive=\"active\">doughnut-chart</a></li>\n            <li><a routerLink=\"error\" routerLinkActive=\"active\">error</a></li>\n            <li><a routerLink=\"guided-panel\" routerLinkActive=\"active\">guided-panel</a></li>\n            <li><a routerLink=\"horizontal-bar-chart\" routerLinkActive=\"active\">horizontal-bar-chart</a></li>\n            <li><a routerLink=\"icons\" routerLinkActive=\"active\">layered icons</a></li>\n            <li><a routerLink=\"loading-wheel\" routerLinkActive=\"active\">loading-wheel</a></li>\n            <li><a routerLink=\"line-chart\" routerLinkActive=\"active\">line-chart</a></li>\n            <li><a routerLink=\"master-view\" routerLinkActive=\"active\">master-view</a></li>\n            <li><a routerLink=\"ordered-list-picker\" routerLinkActive=\"active\">ordered-list-picker</a></li>\n            <li><a routerLink=\"page-alert-bar\" routerLinkActive=\"active\">page-alert-bar</a></li>\n            <li><a routerLink=\"settings\" routerLinkActive=\"active\">settings</a></li>\n            <li><a routerLink=\"wizard\" routerLinkActive=\"active\">wizard</a></li>\n            <li><a routerLink=\"split-view\" routerLinkActive=\"active\">split view</a></li>\n          </ul>\n        </nav>\n        <sme-alert-bar></sme-alert-bar>\n        <div class=\"auto-flex-size relative\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    "
            },] },
];
/** @nocollapse */
ControlsComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXYtZ3VpZGUvbW9kdWxlcy9jb250cm9scy9jb250cm9scy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVSxNQUFPLGVBQUEsQ0FBZ0I7QUFLMUM7SUFBQTtJQTZDQSxDQUFDO0lBM0NpQixpQ0FBZSxHQUE3QixVQUE4QixpQkFBb0MsRUFBRSxRQUFnQztRQUNoRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUF5Q0wsd0JBQUM7QUFBRCxDQTdDQSxBQTZDQzs7QUF4Q00sNEJBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsNnhFQStCVDthQUNKLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCxnQ0FBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQyIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQkEvMTMxL3MvaW5saW5lU3JjLyJ9