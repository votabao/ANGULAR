"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_only_layout_component_1 = require("./components/layout/header-only-layout/header-only-layout.component");
var header_component_1 = require("./components/layout/header/header.component");
var group_header_layout_component_1 = require("./components/layout/group-header-layout/group-header-layout.component");
var group_header_component_1 = require("./components/layout/group-header/group-header.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.ReactiveFormsModule, ng_bootstrap_1.NgbModule],
            declarations: [header_only_layout_component_1.HeaderOnlyLayoutComponent, header_component_1.HeaderComponent, group_header_layout_component_1.GroupHeaderLayoutComponent, group_header_component_1.GroupHeaderComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map