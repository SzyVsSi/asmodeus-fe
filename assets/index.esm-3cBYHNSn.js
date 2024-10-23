var Mt=Object.defineProperty;var st=e=>{throw TypeError(e)};var Lt=(e,t,r)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var it=(e,t,r)=>Lt(e,typeof t!="symbol"?t+"":t,r),Re=(e,t,r)=>t.has(e)||st("Cannot "+r);var x=(e,t,r)=>(Re(e,t,"read from private field"),r?r.call(e):t.get(e)),oe=(e,t,r)=>t.has(e)?st("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ce=(e,t,r,i)=>(Re(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),fe=(e,t,r)=>(Re(e,t,"access private method"),r);import{S as Rt,s as Nt,h as nt,g as Pt,n as bt,a as qt,r as ve,b as P}from"./index-CM0Ln_Dq.js";var re,se,M,Q,X,we,Ie,vt,Bt=(vt=class extends Rt{constructor(t,r){super();oe(this,X);oe(this,re);oe(this,se);oe(this,M);oe(this,Q);ce(this,re,t),this.setOptions(r),this.bindMethods(),fe(this,X,we).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const r=this.options;this.options=x(this,re).defaultMutationOptions(t),Nt(this.options,r)||x(this,re).getMutationCache().notify({type:"observerOptionsUpdated",mutation:x(this,M),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&nt(r.mutationKey)!==nt(this.options.mutationKey)?this.reset():((i=x(this,M))==null?void 0:i.state.status)==="pending"&&x(this,M).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=x(this,M))==null||t.removeObserver(this)}onMutationUpdate(t){fe(this,X,we).call(this),fe(this,X,Ie).call(this,t)}getCurrentResult(){return x(this,se)}reset(){var t;(t=x(this,M))==null||t.removeObserver(this),ce(this,M,void 0),fe(this,X,we).call(this),fe(this,X,Ie).call(this)}mutate(t,r){var i;return ce(this,Q,r),(i=x(this,M))==null||i.removeObserver(this),ce(this,M,x(this,re).getMutationCache().build(x(this,re),this.options)),x(this,M).addObserver(this),x(this,M).execute(t)}},re=new WeakMap,se=new WeakMap,M=new WeakMap,Q=new WeakMap,X=new WeakSet,we=function(){var r;const t=((r=x(this,M))==null?void 0:r.state)??Pt();ce(this,se,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},Ie=function(t){bt.batch(()=>{var r,i,l,u,d,h,U,R;if(x(this,Q)&&this.hasListeners()){const m=x(this,se).variables,v=x(this,se).context;(t==null?void 0:t.type)==="success"?((i=(r=x(this,Q)).onSuccess)==null||i.call(r,t.data,m,v),(u=(l=x(this,Q)).onSettled)==null||u.call(l,t.data,null,m,v)):(t==null?void 0:t.type)==="error"&&((h=(d=x(this,Q)).onError)==null||h.call(d,t.error,m,v),(R=(U=x(this,Q)).onSettled)==null||R.call(U,void 0,t.error,m,v))}this.listeners.forEach(m=>{m(x(this,se))})})},vt);function It(e,t){return typeof e=="function"?e(...t):!!e}function jt(){}function Ne(e,t){const r=qt(),[i]=ve.useState(()=>new Bt(r,e));ve.useEffect(()=>{i.setOptions(e)},[i,e]);const l=ve.useSyncExternalStore(ve.useCallback(d=>i.subscribe(bt.batchCalls(d)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=ve.useCallback((d,h)=>{i.mutate(d,h).catch(jt)},[i]);if(l.error&&It(i.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:u,mutateAsync:l.mutate}}class Ht{constructor(t){this.fetchService=t}async checkValidCode({token:t,code:r,room:i}){return this.fetchService.post(`/verify-code/${t}`,{code:r,room:i})}async checkValidToken(t){return this.fetchService.post(`/verify-token/${t}`)}async deleteToken(t){return this.fetchService.delete(`/asmodeus/${t}`)}}const Kt=({gameSessionsApi:e})=>({useCheckCode:()=>{const{mutateAsync:l,error:u,isPending:d}=Ne({mutationFn:h=>e.checkValidCode(h)});return{checkCode:l,error:u,isPending:d}},useVerifyToken:()=>{const{mutateAsync:l,error:u,isPending:d}=Ne({mutationFn:h=>e.checkValidToken(h)});return{verifyToken:l,error:u,isPending:d}},useDeleteToken:()=>{const{mutateAsync:l,isPending:u,error:d}=Ne({mutationFn:h=>e.deleteToken(h)});return{deleteToken:l,isPending:u,error:d}}});class Wt{constructor(t){it(this,"apiUrl","https://aufzfslpqpjocwztogzo.supabase.co/functions/v1");this.fetchServiceOptions=t}get(t){return this.request({url:t,params:{method:"GET"}})}put(t,r){return this.request({url:t,params:{body:JSON.stringify(r),method:"PUT"}})}post(t,r){return this.request({url:t,params:{method:"POST",body:JSON.stringify(r)}})}delete(t){return this.request({url:t,params:{method:"DELETE"}})}async request({url:t,params:r}){if(!this.apiUrl)throw new Error("The api url is undefined");const i={headers:{"Content-type":"application/json",Accept:"application/json"}};this.fetchServiceOptions.logRequests&&console.debug("api request",{url:this.apiUrl+t,params:r});const l=await fetch(this.apiUrl+t,{...i,...r});return this.handleResponse(l)}async handleResponse(t){if(!t.ok)return Promise.reject(t);const r=await t.text();try{return JSON.parse(r)}catch{return r}}}const $t=new Wt({logRequests:!1}),zt=new Ht($t),Ar=Kt({gameSessionsApi:zt});function _t(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(r=_t(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function Fr(){for(var e,t,r=0,i="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=_t(e))&&(i&&(i+=" "),i+=t);return i}var Fe=e=>e.type==="checkbox",ue=e=>e instanceof Date,C=e=>e==null;const At=e=>typeof e=="object";var k=e=>!C(e)&&!Array.isArray(e)&&At(e)&&!ue(e),Gt=e=>k(e)&&e.target?Fe(e.target)?e.target.checked:e.target.value:e,Jt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Qt=(e,t)=>e.has(Jt(t)),Yt=e=>{const t=e.constructor&&e.constructor.prototype;return k(t)&&t.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function I(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(r||k(e)))if(t=r?[]:{},!r&&!Yt(e))t=e;else for(const i in e)e.hasOwnProperty(i)&&(t[i]=I(e[i]));else return e;return t}var Oe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,y=(e,t,r)=>{if(!t||!k(e))return r;const i=Oe(t.split(/[,[\].]+?/)).reduce((l,u)=>C(l)?l:l[u],e);return w(i)||i===e?w(e[t])?r:e[t]:i},K=e=>typeof e=="boolean",Ke=e=>/^\w*$/.test(e),Ft=e=>Oe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,t,r)=>{let i=-1;const l=Ke(t)?[t]:Ft(t),u=l.length,d=u-1;for(;++i<u;){const h=l[i];let U=r;if(i!==d){const R=e[h];U=k(R)||Array.isArray(R)?R:isNaN(+l[i+1])?{}:[]}if(h==="__proto__")return;e[h]=U,e=e[h]}return e};const ut={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};P.createContext(null);var Xt=(e,t,r,i=!0)=>{const l={defaultValues:t._defaultValues};for(const u in e)Object.defineProperty(l,u,{get:()=>{const d=u;return t._proxyFormState[d]!==H.all&&(t._proxyFormState[d]=!i||H.all),e[d]}});return l},L=e=>k(e)&&!Object.keys(e).length,Zt=(e,t,r,i)=>{r(e);const{name:l,...u}=e;return L(u)||Object.keys(u).length>=Object.keys(t).length||Object.keys(u).find(d=>t[d]===H.all)},ke=e=>Array.isArray(e)?e:[e];function er(e){const t=P.useRef(e);t.current=e,P.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",tr=(e,t,r,i,l)=>W(e)?(i&&t.watch.add(e),y(r,e,l)):Array.isArray(e)?e.map(u=>(i&&t.watch.add(u),y(r,u))):(i&&(t.watchAll=!0),r),rr=(e,t,r,i,l)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:l||!0}}:{},at=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),lt=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const Ae=(e,t,r,i)=>{for(const l of r||Object.keys(e)){const u=y(e,l);if(u){const{_f:d,...h}=u;if(d){if(d.refs&&d.refs[0]&&t(d.refs[0],l)&&!i)return!0;if(d.ref&&t(d.ref,d.name)&&!i)return!0;if(Ae(h,t))break}else if(k(h)&&Ae(h,t))break}}};var sr=(e,t,r)=>{const i=ke(y(e,r));return V(i,"root",t[r]),V(e,r,i),e},We=e=>e.type==="file",Y=e=>typeof e=="function",De=e=>{if(!He)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Se=e=>W(e),$e=e=>e.type==="radio",Ee=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},ct={value:!0,isValid:!0};var mt=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?ct:{value:e[0].value,isValid:!0}:ct:ot}return ot};const ft={isValid:!1,value:null};var Vt=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,ft):ft;function dt(e,t,r="validate"){if(Se(e)||Array.isArray(e)&&e.every(Se)||K(e)&&!e)return{type:r,message:Se(e)?e:"",ref:t}}var de=e=>k(e)&&!Ee(e)?e:{value:e,message:""},yt=async(e,t,r,i,l)=>{const{ref:u,refs:d,required:h,maxLength:U,minLength:R,min:m,max:v,pattern:me,validate:Z,name:N,valueAsNumber:Te,mount:$,disabled:ee}=e._f,A=y(t,N);if(!$||ee)return{};const z=d?d[0]:u,G=_=>{i&&z.reportValidity&&(z.setCustomValidity(K(_)?"":_||""),z.reportValidity())},S={},ae=$e(u),Ve=Fe(u),ie=ae||Ve,le=(Te||We(u))&&w(u.value)&&w(A)||De(u)&&u.value===""||A===""||Array.isArray(A)&&!A.length,q=rr.bind(null,N,r,S),xe=(_,F,D,T=J.maxLength,j=J.minLength)=>{const B=_?F:D;S[N]={type:_?T:j,message:B,ref:u,...q(_?T:j,B)}};if(l?!Array.isArray(A)||!A.length:h&&(!ie&&(le||C(A))||K(A)&&!A||Ve&&!mt(d).isValid||ae&&!Vt(d).isValid)){const{value:_,message:F}=Se(h)?{value:!!h,message:h}:de(h);if(_&&(S[N]={type:J.required,message:F,ref:z,...q(J.required,F)},!r))return G(F),S}if(!le&&(!C(m)||!C(v))){let _,F;const D=de(v),T=de(m);if(!C(A)&&!isNaN(A)){const j=u.valueAsNumber||A&&+A;C(D.value)||(_=j>D.value),C(T.value)||(F=j<T.value)}else{const j=u.valueAsDate||new Date(A),B=ge=>new Date(new Date().toDateString()+" "+ge),ye=u.type=="time",he=u.type=="week";W(D.value)&&A&&(_=ye?B(A)>B(D.value):he?A>D.value:j>new Date(D.value)),W(T.value)&&A&&(F=ye?B(A)<B(T.value):he?A<T.value:j<new Date(T.value))}if((_||F)&&(xe(!!_,D.message,T.message,J.max,J.min),!r))return G(S[N].message),S}if((U||R)&&!le&&(W(A)||l&&Array.isArray(A))){const _=de(U),F=de(R),D=!C(_.value)&&A.length>+_.value,T=!C(F.value)&&A.length<+F.value;if((D||T)&&(xe(D,_.message,F.message),!r))return G(S[N].message),S}if(me&&!le&&W(A)){const{value:_,message:F}=de(me);if(Ee(_)&&!A.match(_)&&(S[N]={type:J.pattern,message:F,ref:u,...q(J.pattern,F)},!r))return G(F),S}if(Z){if(Y(Z)){const _=await Z(A,t),F=dt(_,z);if(F&&(S[N]={...F,...q(J.validate,F.message)},!r))return G(F.message),S}else if(k(Z)){let _={};for(const F in Z){if(!L(_)&&!r)break;const D=dt(await Z[F](A,t),z,F);D&&(_={...D,...q(F,D.message)},G(D.message),r&&(S[N]=_))}if(!L(_)&&(S[N]={ref:z,..._},!r))return S}}return G(!0),S};function ir(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=w(e)?i++:e[t[i++]];return e}function nr(e){for(const t in e)if(e.hasOwnProperty(t)&&!w(e[t]))return!1;return!0}function E(e,t){const r=Array.isArray(t)?t:Ke(t)?[t]:Ft(t),i=r.length===1?e:ir(e,r),l=r.length-1,u=r[l];return i&&delete i[u],l!==0&&(k(i)&&L(i)||Array.isArray(i)&&nr(i))&&E(e,r.slice(0,-1)),e}var Pe=()=>{let e=[];return{get observers(){return e},next:l=>{for(const u of e)u.next&&u.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(u=>u!==l)}}),unsubscribe:()=>{e=[]}}},je=e=>C(e)||!At(e);function te(e,t){if(je(e)||je(t))return e===t;if(ue(e)&&ue(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const l of r){const u=e[l];if(!i.includes(l))return!1;if(l!=="ref"){const d=t[l];if(ue(u)&&ue(d)||k(u)&&k(d)||Array.isArray(u)&&Array.isArray(d)?!te(u,d):u!==d)return!1}}return!0}var xt=e=>e.type==="select-multiple",ur=e=>$e(e)||Fe(e),qe=e=>De(e)&&e.isConnected,wt=e=>{for(const t in e)if(Y(e[t]))return!0;return!1};function pe(e,t={}){const r=Array.isArray(e);if(k(e)||r)for(const i in e)Array.isArray(e[i])||k(e[i])&&!wt(e[i])?(t[i]=Array.isArray(e[i])?[]:{},pe(e[i],t[i])):C(e[i])||(t[i]=!0);return t}function kt(e,t,r){const i=Array.isArray(e);if(k(e)||i)for(const l in e)Array.isArray(e[l])||k(e[l])&&!wt(e[l])?w(t)||je(r[l])?r[l]=Array.isArray(e[l])?pe(e[l],[]):{...pe(e[l])}:kt(e[l],C(t)?{}:t[l],r[l]):r[l]=!te(e[l],t[l]);return r}var be=(e,t)=>kt(e,t,pe(t)),St=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>w(e)?e:t?e===""?NaN:e&&+e:r&&W(e)?new Date(e):i?i(e):e;function Be(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return We(t)?t.files:$e(t)?Vt(e.refs).value:xt(t)?[...t.selectedOptions].map(({value:r})=>r):Fe(t)?mt(e.refs).value:St(w(t.value)?e.ref.value:t.value,e)}var ar=(e,t,r,i)=>{const l={};for(const u of e){const d=y(t,u);d&&V(l,u,d._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:i}},_e=e=>w(e)?e:Ee(e)?e.source:k(e)?Ee(e.value)?e.value.source:e.value:e;const ht="AsyncFunction";var lr=e=>(!e||!e.validate)&&!!(Y(e.validate)&&e.validate.constructor.name===ht||k(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ht)),or=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function gt(e,t,r){const i=y(e,r);if(i||Ke(r))return{error:i,name:r};const l=r.split(".");for(;l.length;){const u=l.join("."),d=y(t,u),h=y(e,u);if(d&&!Array.isArray(d)&&r!==u)return{name:r};if(h&&h.type)return{name:u,error:h};l.pop()}return{name:r}}var cr=(e,t,r,i,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(t||e):(r?i.isOnBlur:l.isOnBlur)?!e:(r?i.isOnChange:l.isOnChange)?e:!0,fr=(e,t)=>!Oe(y(e,t)).length&&E(e,t);const dr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function yr(e={}){let t={...dr,...e},r={submitCount:0,isDirty:!1,isLoading:Y(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},i={},l=k(t.defaultValues)||k(t.values)?I(t.defaultValues||t.values)||{}:{},u=t.shouldUnregister?{}:I(l),d={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},U,R=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Pe(),array:Pe(),state:Pe()},me=at(t.mode),Z=at(t.reValidateMode),N=t.criteriaMode===H.all,Te=s=>n=>{clearTimeout(R),R=setTimeout(s,n)},$=async s=>{if(!e.disabled&&(m.isValid||s)){const n=t.resolver?L((await ie()).errors):await q(i,!0);n!==r.isValid&&v.state.next({isValid:n})}},ee=(s,n)=>{!e.disabled&&(m.isValidating||m.validatingFields)&&((s||Array.from(h.mount)).forEach(a=>{a&&(n?V(r.validatingFields,a,n):E(r.validatingFields,a))}),v.state.next({validatingFields:r.validatingFields,isValidating:!L(r.validatingFields)}))},A=(s,n=[],a,f,c=!0,o=!0)=>{if(f&&a&&!e.disabled){if(d.action=!0,o&&Array.isArray(y(i,s))){const g=a(y(i,s),f.argA,f.argB);c&&V(i,s,g)}if(o&&Array.isArray(y(r.errors,s))){const g=a(y(r.errors,s),f.argA,f.argB);c&&V(r.errors,s,g),fr(r.errors,s)}if(m.touchedFields&&o&&Array.isArray(y(r.touchedFields,s))){const g=a(y(r.touchedFields,s),f.argA,f.argB);c&&V(r.touchedFields,s,g)}m.dirtyFields&&(r.dirtyFields=be(l,u)),v.state.next({name:s,isDirty:_(s,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(u,s,n)},z=(s,n)=>{V(r.errors,s,n),v.state.next({errors:r.errors})},G=s=>{r.errors=s,v.state.next({errors:r.errors,isValid:!1})},S=(s,n,a,f)=>{const c=y(i,s);if(c){const o=y(u,s,w(a)?y(l,s):a);w(o)||f&&f.defaultChecked||n?V(u,s,n?o:Be(c._f)):T(s,o),d.mount&&$()}},ae=(s,n,a,f,c)=>{let o=!1,g=!1;const b={name:s};if(!e.disabled){const p=!!(y(i,s)&&y(i,s)._f&&y(i,s)._f.disabled);if(!a||f){m.isDirty&&(g=r.isDirty,r.isDirty=b.isDirty=_(),o=g!==b.isDirty);const O=p||te(y(l,s),n);g=!!(!p&&y(r.dirtyFields,s)),O||p?E(r.dirtyFields,s):V(r.dirtyFields,s,!0),b.dirtyFields=r.dirtyFields,o=o||m.dirtyFields&&g!==!O}if(a){const O=y(r.touchedFields,s);O||(V(r.touchedFields,s,a),b.touchedFields=r.touchedFields,o=o||m.touchedFields&&O!==a)}o&&c&&v.state.next(b)}return o?b:{}},Ve=(s,n,a,f)=>{const c=y(r.errors,s),o=m.isValid&&K(n)&&r.isValid!==n;if(e.delayError&&a?(U=Te(()=>z(s,a)),U(e.delayError)):(clearTimeout(R),U=null,a?V(r.errors,s,a):E(r.errors,s)),(a?!te(c,a):c)||!L(f)||o){const g={...f,...o&&K(n)?{isValid:n}:{},errors:r.errors,name:s};r={...r,...g},v.state.next(g)}},ie=async s=>{ee(s,!0);const n=await t.resolver(u,t.context,ar(s||h.mount,i,t.criteriaMode,t.shouldUseNativeValidation));return ee(s),n},le=async s=>{const{errors:n}=await ie(s);if(s)for(const a of s){const f=y(n,a);f?V(r.errors,a,f):E(r.errors,a)}else r.errors=n;return n},q=async(s,n,a={valid:!0})=>{for(const f in s){const c=s[f];if(c){const{_f:o,...g}=c;if(o){const b=h.array.has(o.name),p=c._f&&lr(c._f);p&&m.validatingFields&&ee([f],!0);const O=await yt(c,u,N,t.shouldUseNativeValidation&&!n,b);if(p&&m.validatingFields&&ee([f]),O[o.name]&&(a.valid=!1,n))break;!n&&(y(O,o.name)?b?sr(r.errors,O,o.name):V(r.errors,o.name,O[o.name]):E(r.errors,o.name))}!L(g)&&await q(g,n,a)}}return a.valid},xe=()=>{for(const s of h.unMount){const n=y(i,s);n&&(n._f.refs?n._f.refs.every(a=>!qe(a)):!qe(n._f.ref))&&Ce(s)}h.unMount=new Set},_=(s,n)=>!e.disabled&&(s&&n&&V(u,s,n),!te(ze(),l)),F=(s,n,a)=>tr(s,h,{...d.mount?u:w(n)?l:W(s)?{[s]:n}:n},a,n),D=s=>Oe(y(d.mount?u:l,s,e.shouldUnregister?y(l,s,[]):[])),T=(s,n,a={})=>{const f=y(i,s);let c=n;if(f){const o=f._f;o&&(!o.disabled&&V(u,s,St(n,o)),c=De(o.ref)&&C(n)?"":n,xt(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?Fe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(b=>b===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):We(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:s,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ae(s,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ge(s)},j=(s,n,a)=>{for(const f in n){const c=n[f],o=`${s}.${f}`,g=y(i,o);(h.array.has(s)||k(c)||g&&!g._f)&&!ue(c)?j(o,c,a):T(o,c,a)}},B=(s,n,a={})=>{const f=y(i,s),c=h.array.has(s),o=I(n);V(u,s,o),c?(v.array.next({name:s,values:{...u}}),(m.isDirty||m.dirtyFields)&&a.shouldDirty&&v.state.next({name:s,dirtyFields:be(l,u),isDirty:_(s,o)})):f&&!f._f&&!C(o)?j(s,o,a):T(s,o,a),lt(s,h)&&v.state.next({...r}),v.values.next({name:d.mount?s:void 0,values:{...u}})},ye=async s=>{d.mount=!0;const n=s.target;let a=n.name,f=!0;const c=y(i,a),o=()=>n.type?Be(c._f):Gt(s),g=b=>{f=Number.isNaN(b)||ue(b)&&isNaN(b.getTime())||te(b,y(u,a,b))};if(c){let b,p;const O=o(),ne=s.type===ut.BLUR||s.type===ut.FOCUS_OUT,Tt=!or(c._f)&&!t.resolver&&!y(r.errors,a)&&!c._f.deps||cr(ne,y(r.touchedFields,a),r.isSubmitted,Z,me),Me=lt(a,h,ne);V(u,a,O),ne?(c._f.onBlur&&c._f.onBlur(s),U&&U(0)):c._f.onChange&&c._f.onChange(s);const Le=ae(a,O,ne,!1),Ct=!L(Le)||Me;if(!ne&&v.values.next({name:a,type:s.type,values:{...u}}),Tt)return m.isValid&&(e.mode==="onBlur"?ne&&$():$()),Ct&&v.state.next({name:a,...Me?{}:Le});if(!ne&&Me&&v.state.next({...r}),t.resolver){const{errors:tt}=await ie([a]);if(g(O),f){const Ut=gt(r.errors,i,a),rt=gt(tt,i,Ut.name||a);b=rt.error,a=rt.name,p=L(tt)}}else ee([a],!0),b=(await yt(c,u,N,t.shouldUseNativeValidation))[a],ee([a]),g(O),f&&(b?p=!1:m.isValid&&(p=await q(i,!0)));f&&(c._f.deps&&ge(c._f.deps),Ve(a,p,b,Le))}},he=(s,n)=>{if(y(r.errors,n)&&s.focus)return s.focus(),1},ge=async(s,n={})=>{let a,f;const c=ke(s);if(t.resolver){const o=await le(w(s)?s:c);a=L(o),f=s?!c.some(g=>y(o,g)):a}else s?(f=(await Promise.all(c.map(async o=>{const g=y(i,o);return await q(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&$()):f=a=await q(i);return v.state.next({...!W(s)||m.isValid&&a!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:a}:{},errors:r.errors}),n.shouldFocus&&!f&&Ae(i,he,s?c:h.mount),f},ze=s=>{const n={...d.mount?u:l};return w(s)?n:W(s)?y(n,s):s.map(a=>y(n,a))},Ge=(s,n)=>({invalid:!!y((n||r).errors,s),isDirty:!!y((n||r).dirtyFields,s),error:y((n||r).errors,s),isValidating:!!y(r.validatingFields,s),isTouched:!!y((n||r).touchedFields,s)}),Dt=s=>{s&&ke(s).forEach(n=>E(r.errors,n)),v.state.next({errors:s?r.errors:{}})},Je=(s,n,a)=>{const f=(y(i,s,{_f:{}})._f||{}).ref,c=y(r.errors,s)||{},{ref:o,message:g,type:b,...p}=c;V(r.errors,s,{...p,...n,ref:f}),v.state.next({name:s,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},Et=(s,n)=>Y(s)?v.values.subscribe({next:a=>s(F(void 0,n),a)}):F(s,n,!0),Ce=(s,n={})=>{for(const a of s?ke(s):h.mount)h.mount.delete(a),h.array.delete(a),n.keepValue||(E(i,a),E(u,a)),!n.keepError&&E(r.errors,a),!n.keepDirty&&E(r.dirtyFields,a),!n.keepTouched&&E(r.touchedFields,a),!n.keepIsValidating&&E(r.validatingFields,a),!t.shouldUnregister&&!n.keepDefaultValue&&E(l,a);v.values.next({values:{...u}}),v.state.next({...r,...n.keepDirty?{isDirty:_()}:{}}),!n.keepIsValid&&$()},Qe=({disabled:s,name:n,field:a,fields:f,value:c})=>{if(K(s)&&d.mount||s){const o=s?void 0:w(c)?Be(a?a._f:y(f,n)._f):c;V(u,n,o),ae(n,o,!1,!1,!0)}},Ue=(s,n={})=>{let a=y(i,s);const f=K(n.disabled)||K(e.disabled);return V(i,s,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:s}},name:s,mount:!0,...n}}),h.mount.add(s),a?Qe({field:a,disabled:K(n.disabled)?n.disabled:e.disabled,name:s,value:n.value}):S(s,!0,n.value),{...f?{disabled:n.disabled||e.disabled}:{},...t.progressive?{required:!!n.required,min:_e(n.min),max:_e(n.max),minLength:_e(n.minLength),maxLength:_e(n.maxLength),pattern:_e(n.pattern)}:{},name:s,onChange:ye,onBlur:ye,ref:c=>{if(c){Ue(s,n),a=y(i,s);const o=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=ur(o),b=a._f.refs||[];if(g?b.find(p=>p===o):o===a._f.ref)return;V(i,s,{_f:{...a._f,...g?{refs:[...b.filter(qe),o,...Array.isArray(y(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),S(s,!1,void 0,o)}else a=y(i,s,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(Qt(h.array,s)&&d.action)&&h.unMount.add(s)}}},Ye=()=>t.shouldFocusError&&Ae(i,he,h.mount),pt=s=>{K(s)&&(v.state.next({disabled:s}),Ae(i,(n,a)=>{const f=y(i,a);f&&(n.disabled=f._f.disabled||s,Array.isArray(f._f.refs)&&f._f.refs.forEach(c=>{c.disabled=f._f.disabled||s}))},0,!1))},Xe=(s,n)=>async a=>{let f;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=I(u);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:o,values:g}=await ie();r.errors=o,c=g}else await q(i);if(E(r.errors,"root"),L(r.errors)){v.state.next({errors:{}});try{await s(c,a)}catch(o){f=o}}else n&&await n({...r.errors},a),Ye(),setTimeout(Ye);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:L(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},Ot=(s,n={})=>{y(i,s)&&(w(n.defaultValue)?B(s,I(y(l,s))):(B(s,n.defaultValue),V(l,s,I(n.defaultValue))),n.keepTouched||E(r.touchedFields,s),n.keepDirty||(E(r.dirtyFields,s),r.isDirty=n.defaultValue?_(s,I(y(l,s))):_()),n.keepError||(E(r.errors,s),m.isValid&&$()),v.state.next({...r}))},Ze=(s,n={})=>{const a=s?I(s):l,f=I(a),c=L(s),o=c?l:f;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues){const g=new Set([...h.mount,...Object.keys(be(l,u))]);for(const b of Array.from(g))y(r.dirtyFields,b)?V(o,b,y(u,b)):B(b,y(o,b))}else{if(He&&w(s))for(const g of h.mount){const b=y(i,g);if(b&&b._f){const p=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(De(p)){const O=p.closest("form");if(O){O.reset();break}}}}i={}}u=e.shouldUnregister?n.keepDefaultValues?I(l):{}:I(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}h={mount:n.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!m.isValid||!!n.keepIsValid||!!n.keepDirtyValues,d.watch=!!e.shouldUnregister,v.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:c?!1:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!te(s,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:n.keepDirtyValues?n.keepDefaultValues&&u?be(l,u):r.dirtyFields:n.keepDefaultValues&&s?be(l,s):n.keepDirty?r.dirtyFields:{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(s,n)=>Ze(Y(s)?s(u):s,n);return{control:{register:Ue,unregister:Ce,getFieldState:Ge,handleSubmit:Xe,setError:Je,_executeSchema:ie,_getWatch:F,_getDirty:_,_updateValid:$,_removeUnmounted:xe,_updateFieldArray:A,_updateDisabledField:Qe,_getFieldArray:D,_reset:Ze,_resetDefaultValues:()=>Y(t.defaultValues)&&t.defaultValues().then(s=>{et(s,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:pt,_subjects:v,_proxyFormState:m,_setErrors:G,get _fields(){return i},get _formValues(){return u},get _state(){return d},set _state(s){d=s},get _defaultValues(){return l},get _names(){return h},set _names(s){h=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:ge,register:Ue,handleSubmit:Xe,watch:Et,setValue:B,getValues:ze,reset:et,resetField:Ot,clearErrors:Dt,unregister:Ce,setError:Je,setFocus:(s,n={})=>{const a=y(i,s),f=a&&a._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},getFieldState:Ge}}function mr(e={}){const t=P.useRef(),r=P.useRef(),[i,l]=P.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...yr(e),formState:i});const u=t.current.control;return u._options=e,er({subject:u._subjects.state,next:d=>{Zt(d,u._proxyFormState,u._updateFormState)&&l({...u._formState})}}),P.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),P.useEffect(()=>{if(u._proxyFormState.isDirty){const d=u._getDirty();d!==i.isDirty&&u._subjects.state.next({isDirty:d})}},[u,i.isDirty]),P.useEffect(()=>{e.values&&!te(e.values,r.current)?(u._reset(e.values,u._options.resetOptions),r.current=e.values,l(d=>({...d}))):u._resetDefaultValues()},[e.values,u]),P.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),P.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),P.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),P.useEffect(()=>{t.current&&(t.current.watch=t.current.watch.bind({}))},[i]),t.current.formState=Xt(i,u),t.current}export{Fr as c,Ar as g,mr as u};
//# sourceMappingURL=index.esm-3cBYHNSn.js.map