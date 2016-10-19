/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('../../app/app.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/common/src/directives/ng_if');
var import11 = require('../../app/hero.service');
var import12 = require('../../app/heroes.component');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('./heroes.component.ngfactory');
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import3.AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import3.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Toggle Heading', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_3 = new import2.AppElement(3, null, this, this._anchor_3);
        this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3, viewFactory_AppComponent1);
        this._NgIf_3_6 = new import10.NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'my-heroes', null);
        this._appEl_5 = new import2.AppElement(5, null, this, this._el_5);
        var compView_5 = import14.viewFactory_HeroesComponent0(this.viewUtils, this.injector(5), this._appEl_5);
        this._HeroService_5_4 = new import11.HeroService();
        this._HeroesComponent_5_5 = new import12.HeroesComponent(this._HeroService_5_4);
        this._appEl_5.initComponent(this._HeroesComponent_5_5, [], compView_5);
        compView_5.create(this._HeroesComponent_5_5, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._el_5
        ], [disposable_0], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import10.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6;
        }
        if (((token === import11.HeroService) && (5 === requestNodeIndex))) {
            return this._HeroService_5_4;
        }
        if (((token === import12.HeroesComponent) && (5 === requestNodeIndex))) {
            return this._HeroesComponent_5_5;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.showHeading;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_3_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._HeroesComponent_5_5.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.toggleHeading() !== false);
        return (true && pd_0);
    };
    return _View_AppComponent0;
}(import1.AppView));
function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppComponent0 = viewFactory_AppComponent0;
var _View_AppComponent1 = (function (_super) {
    __extends(_View_AppComponent1, _super);
    function _View_AppComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent1, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent1;
}(import1.AppView));
function viewFactory_AppComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map