/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_if';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
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
export var AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import3.AppComponent);
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
        this._TemplateRef_3_5 = new import12.TemplateRef_(this._appEl_3, viewFactory_AppComponent1);
        this._NgIf_3_6 = new import10.NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'h3', null);
        this._text_6 = this.renderer.createText(this._el_5, 'List of Heroes', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_8 = new import2.AppElement(8, null, this, this._anchor_8);
        this._TemplateRef_8_5 = new import12.TemplateRef_(this._appEl_8, viewFactory_AppComponent2);
        this._NgFor_8_6 = new import11.NgFor(this._appEl_8.vcRef, this._TemplateRef_8_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import10.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6;
        }
        if (((token === import12.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import11.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_1 = this.context.showHeading;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_3_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        changes = null;
        var currVal_2 = this.context.heroes;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgFor_8_6.ngForOf = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._NgFor_8_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_8_6.ngDoCheck();
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
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_AppComponent1 = (function (_super) {
    __extends(_View_AppComponent1, _super);
    function _View_AppComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent1, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'My First Angular App', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_AppComponent1;
}(import1.AppView));
function viewFactory_AppComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_AppComponent2 = (function (_super) {
    __extends(_View_AppComponent2, _super);
    function _View_AppComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent2, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent2;
}(import1.AppView));
function viewFactory_AppComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map