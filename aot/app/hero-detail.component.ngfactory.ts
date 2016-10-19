/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/hero-detail.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_if';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/forms/src/directives/default_value_accessor';
import * as import13 from '@angular/forms/src/directives/ng_model';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/ng_control';
var renderType_HeroDetailComponent_Host:import0.RenderComponentType = (null as any);
class _View_HeroDetailComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HeroDetailComponent_0_4:import3.HeroDetailComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroDetailComponent_Host0,renderType_HeroDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-hero-detail',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeroDetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeroDetailComponent_0_4 = new import3.HeroDetailComponent();
    this._appEl_0.initComponent(this._HeroDetailComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._HeroDetailComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HeroDetailComponent) && (0 === requestNodeIndex))) { return this._HeroDetailComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroDetailComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeroDetailComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HeroDetailComponent_Host === (null as any))) { (renderType_HeroDetailComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HeroDetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeroDetailComponentNgFactory:import9.ComponentFactory<import3.HeroDetailComponent> = new import9.ComponentFactory<import3.HeroDetailComponent>('my-hero-detail',viewFactory_HeroDetailComponent_Host0,import3.HeroDetailComponent);
const styles_HeroDetailComponent:any[] = ([] as any[]);
var renderType_HeroDetailComponent:import0.RenderComponentType = (null as any);
class _View_HeroDetailComponent0 extends import1.AppView<import3.HeroDetailComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import10.NgIf;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroDetailComponent0,renderType_HeroDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import11.TemplateRef_(this._appEl_0,viewFactory_HeroDetailComponent1);
    this._NgIf_0_6 = new import10.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._anchor_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import10.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.hero;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_HeroDetailComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HeroDetailComponent> {
  if ((renderType_HeroDetailComponent === (null as any))) { (renderType_HeroDetailComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_HeroDetailComponent,{})); }
  return new _View_HeroDetailComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_HeroDetailComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _DefaultValueAccessor_15_3:import12.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_15_4:any[];
  _NgModel_15_5:import13.NgModel;
  _NgControl_15_6:any;
  _NgControlStatus_15_7:import14.NgControlStatus;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroDetailComponent1,renderType_HeroDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._el_6 = this.renderer.createElement(this._el_5,'label',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'id: ',(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'label',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'name: ',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_10,'input',(null as any));
    this.renderer.setElementAttribute(this._el_15,'placeholder','name');
    this._DefaultValueAccessor_15_3 = new import12.DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_15));
    this._NG_VALUE_ACCESSOR_15_4 = [this._DefaultValueAccessor_15_3];
    this._NgModel_15_5 = new import13.NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_15_4);
    this._NgControl_15_6 = this._NgModel_15_5;
    this._NgControlStatus_15_7 = new import14.NgControlStatus(this._NgControl_15_6);
    this._text_16 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_15,'ngModelChange',this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_15,'input',this.eventHandler(this._handle_input_15_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_15,'blur',this.eventHandler(this._handle_blur_15_2.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_15_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.DefaultValueAccessor) && (15 === requestNodeIndex))) { return this._DefaultValueAccessor_15_3; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_15_4; }
    if (((token === import13.NgModel) && (15 === requestNodeIndex))) { return this._NgModel_15_5; }
    if (((token === import17.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_6; }
    if (((token === import14.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_7; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_5:any = this.parent.context.hero.name;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgModel_15_5.model = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._NgModel_15_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.hero.name,' details!');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.hero.id,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_8,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_6:any = this._NgControlStatus_15_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_15,'ng-untouched',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_15_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_15,'ng-touched',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_15_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_15,'ng-pristine',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_15_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_15,'ng-dirty',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatus_15_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_15,'ng-valid',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._NgControlStatus_15_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_15,'ng-invalid',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_15_5.ngOnDestroy();
  }
  private _handle_ngModelChange_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.hero.name = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_15_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_15_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_15_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_15_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroDetailComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_HeroDetailComponent1(viewUtils,parentInjector,declarationEl);
}