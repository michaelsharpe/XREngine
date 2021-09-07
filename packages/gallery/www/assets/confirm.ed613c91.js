var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{R as n,u as c,T as l}from"./vendor.40ddfb4b.js";import{b as i,O as s}from"./_app.e67b0e96.js";import{j as m}from"./service.2cb21ce4.js";import{s as p}from"./selector.d1cb6f6a.js";import{c as f}from"./feathers.42c2841d.js";import{C as d}from"./CardMedia.d28b7db0.js";import{T as u}from"./Typography.9d0f0940.js";import{B as E}from"./Button.31285e4e.js";import"./index.b0bd5cc1.js";import"./index.1d867f8f.js";import"./capitalize.f4eb3e2e.js";var b="_loginPage_1p2fd_1",g="_logo_1p2fd_18",y="_placeholder_1p2fd_23",h="_content_1p2fd_29",j="_footer_1p2fd_49";const v=e=>{const t=s(),{auth:a,resendVerificationEmail:r}=e,{t:o}=c();return n.createElement("section",{className:b},n.createElement("span",{className:y}),n.createElement(d,{className:g,image:e.logo,title:"ARC Logo"}),n.createElement("span",{className:y}),n.createElement(u,{component:"h1",variant:"h5",align:"center"},o("user:auth.confirmEmail.header")),n.createElement("section",{className:h},n.createElement(u,{variant:"body2",color:"textSecondary",align:"center"},n.createElement(l,{t:o,i18nKey:"user:auth.confirmEmail.resendEmail"},"Please check your email to verify your account. If you didn't get an email, please click",n.createElement(E,{variant:"contained",color:"primary",onClick:e=>(e=>{e.preventDefault();const t=a.get("identityProvider");console.log("---------",t),r(t.token)})(e)},"here"),n.createElement("br",null),"to resend the verification email."))),n.createElement("span",{className:y}),n.createElement("section",{className:j},n.createElement("p",null,n.createElement(l,{t:o,i18nKey:"user:auth.confirmEmail.resendEmail"},"Have an account? ",n.createElement("span",{onClick:()=>t.push("/login")}," Log in")))))};var _=f((e=>({auth:p(e)})),(e=>({resendVerificationEmail:i(m,e)})))((e=>n.createElement(v,((e,n)=>{for(var c in n||(n={}))a.call(n,c)&&o(e,c,n[c]);if(t)for(var c of t(n))r.call(n,c)&&o(e,c,n[c]);return e})({},e))));const N=()=>n.createElement(_,{logo:"/assets/LogoColored.png"});export{N as ConfirmEmailPage,N as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5lZDYxM2M5MS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50LWNvcmUvc3JjL3VzZXIvY29tcG9uZW50cy9BdXRoL0NvbmZpcm1FbWFpbEFwcC50c3giLCIuLi8uLi9zcmMvcGFnZXMvYXV0aC9jb25maXJtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzLCBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hdXRoL3NlcnZpY2UnXG5pbXBvcnQgeyBzZWxlY3RBdXRoU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hdXRoL3NlbGVjdG9yJ1xuaW1wb3J0IHsgSWRlbnRpdHlQcm92aWRlciB9IGZyb20gJ0B4cmVuZ2luZS9jb21tb24vc3JjL2ludGVyZmFjZXMvSWRlbnRpdHlQcm92aWRlcidcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vTG9naW4vTG9naW4ubW9kdWxlLnNjc3MnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogYW55KTogYW55ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzZWxlY3RBdXRoU3RhdGUoc3RhdGUpXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaCk6IGFueSA9PiAoe1xuICByZXNlbmRWZXJpZmljYXRpb25FbWFpbDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsLCBkaXNwYXRjaClcbn0pXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxvZ28/OiBzdHJpbmdcbiAgYXV0aD86IGFueVxuICByZXNlbmRWZXJpZmljYXRpb25FbWFpbD86IHR5cGVvZiByZXNlbmRWZXJpZmljYXRpb25FbWFpbFxufVxuXG5jb25zdCBDb25maXJtRW1haWwgPSAocHJvcHM6IFByb3BzKTogYW55ID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGF1dGgsIHJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIH0gPSBwcm9wc1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGFuZGxlUmVzZW5kRW1haWwgPSAoZTogYW55KTogYW55ID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGlkZW50aXR5UHJvdmlkZXIgPSBhdXRoLmdldCgnaWRlbnRpdHlQcm92aWRlcicpIGFzIElkZW50aXR5UHJvdmlkZXJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tJywgaWRlbnRpdHlQcm92aWRlcilcbiAgICByZXNlbmRWZXJpZmljYXRpb25FbWFpbChpZGVudGl0eVByb3ZpZGVyLnRva2VuKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblBhZ2V9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICA8Q2FyZE1lZGlhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGltYWdlPXtwcm9wcy5sb2dvfSB0aXRsZT1cIkFSQyBMb2dvXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7dCgndXNlcjphdXRoLmNvbmZpcm1FbWFpbC5oZWFkZXInKX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUcmFucyB0PXt0fSBpMThuS2V5PVwidXNlcjphdXRoLmNvbmZpcm1FbWFpbC5yZXNlbmRFbWFpbFwiPlxuICAgICAgICAgICAgUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgdG8gdmVyaWZ5IHlvdXIgYWNjb3VudC4gSWYgeW91IGRpZG4mYXBvczt0IGdldCBhbiBlbWFpbCwgcGxlYXNlIGNsaWNrXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVzZW5kRW1haWwoZSl9PlxuICAgICAgICAgICAgICBoZXJlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgdG8gcmVzZW5kIHRoZSB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8VHJhbnMgdD17dH0gaTE4bktleT1cInVzZXI6YXV0aC5jb25maXJtRW1haWwucmVzZW5kRW1haWxcIj5cbiAgICAgICAgICAgIEhhdmUgYW4gYWNjb3VudD8gPHNwYW4gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0+IExvZyBpbjwvc3Bhbj5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IENvbmZpcm1FbWFpbFdyYXBwZXIgPSAocHJvcHM6IFByb3BzKTogYW55ID0+IDxDb25maXJtRW1haWwgey4uLnByb3BzfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb25maXJtRW1haWxXcmFwcGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbmZpcm1FbWFpbCBmcm9tICdAeHJlbmdpbmUvY2xpZW50LWNvcmUvc3JjL3VzZXIvY29tcG9uZW50cy9BdXRoL0NvbmZpcm1FbWFpbEFwcCdcblxuZXhwb3J0IGNvbnN0IENvbmZpcm1FbWFpbFBhZ2UgPSAoKSA9PiA8Q29uZmlybUVtYWlsIGxvZ289XCIvYXNzZXRzL0xvZ29Db2xvcmVkLnBuZ1wiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1FbWFpbFBhZ2VcbiJdLCJuYW1lcyI6WyJDb25maXJtRW1haWwiLCJwcm9wcyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiYXV0aCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiQ2FyZE1lZGlhIiwiaW1hZ2UiLCJsb2dvIiwidGl0bGUiLCJUeXBvZ3JhcGh5IiwiY29tcG9uZW50IiwidmFyaWFudCIsImFsaWduIiwiY29sb3IiLCJUcmFucyIsImkxOG5LZXkiLCJCdXR0b24iLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWRlbnRpdHlQcm92aWRlciIsImdldCIsImxvZyIsInRva2VuIiwiaGFuZGxlUmVzZW5kRW1haWwiLCJwdXNoIiwiY29ubmVjdCIsInN0YXRlIiwic2VsZWN0QXV0aFN0YXRlIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJfX3NwcmVhZFZhbHVlcyIsIkNvbmZpcm1FbWFpbFBhZ2UiXSwibWFwcGluZ3MiOiI0d0JBY0EsTUFnQk1BLEVBQWdCQyxVQUNkQyxFQUFVQyxLQUNWQyxLQUFFQSxFQUFNQywyQkFBNEJKLEdBQ3BDSyxFQUFFQSxHQUFNQywyQkFVWCxVQUFELENBQVNDLFVBQVdDLG1CQUNqQixPQUFELENBQU1ELFVBQVdDLG9CQUNoQkMsRUFBRCxDQUFXRixVQUFXQyxFQUFhRSxNQUFPVixFQUFNVyxLQUFNQyxNQUFNLDZCQUMzRCxPQUFELENBQU1MLFVBQVdDLG9CQUNoQkssRUFBRCxDQUFZQyxVQUFVLEtBQUtDLFFBQVEsS0FBS0MsTUFBTSxVQUMzQ1gsRUFBRSxrREFFSixVQUFELENBQVNFLFVBQVdDLG1CQUNqQkssRUFBRCxDQUFZRSxRQUFRLFFBQVFFLE1BQU0sZ0JBQWdCRCxNQUFNLDBCQUNyREUsRUFBRCxDQUFPYixFQUFBQSxFQUFNYyxRQUFRLHNDQUFxQywyR0FFdkRDLEVBQUQsQ0FBUUwsUUFBUSxZQUFZRSxNQUFNLFVBQVVJLFFBQVVDLEdBcEJ0QyxDQUFDQSxNQUN2QkMsdUJBRUlDLEVBQW1CckIsRUFBS3NCLElBQUksNEJBQzFCQyxJQUFJLFlBQWFGLEtBQ0RBLEVBQWlCRyxRQWUyQkMsQ0FBa0JOLElBQUksd0JBR2pGLEtBQUQsTUFBTSx1REFLWCxPQUFELENBQU1mLFVBQVdDLG9CQUNoQixVQUFELENBQVNELFVBQVdDLG1CQUNqQixJQUFELHFCQUNHVSxFQUFELENBQU9iLEVBQUFBLEVBQU1jLFFBQVEsc0NBQXFDLG9DQUN0QyxPQUFELENBQU1FLFFBQVMsSUFBTXBCLEVBQVE0QixLQUFLLFdBQVcsZ0JBVTFFLE1BQWVDLEdBOURVQyxJQUNoQixDQUNMNUIsS0FBTTZCLEVBQWdCRCxPQUlFRSxLQUMxQjdCLHdCQUF5QjhCLEVBQW1COUIsRUFBeUI2QixNQXVEeERILEVBRmM5QixtQkFBdUJELHFIQUFEb0MsSUFBa0JuQyxZQ3ZFeERvQyxFQUFtQixvQkFBT3JDLEVBQUQsQ0FBY1ksS0FBSyJ9
