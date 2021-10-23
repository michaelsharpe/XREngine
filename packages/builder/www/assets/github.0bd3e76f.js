var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{u as c,r as i,R as l}from"./vendor.40ddfb4b.js";import{h as p,i as f}from"./service.2cb21ce4.js";import{s as u}from"./selector.d1cb6f6a.js";import{ax as m,b,ay as d}from"./_app.e67b0e96.js";import{c as h}from"./feathers.42c2841d.js";import{C as j}from"./Container.8fcf9e42.js";import"./index.b0bd5cc1.js";import"./index.1d867f8f.js";import"./capitalize.f4eb3e2e.js";const g=m(h((e=>({auth:u(e)})),(e=>({loginUserByJwt:b(p,e),refreshConnections:b(f,e)})))((e=>{const{auth:p,loginUserByJwt:f,refreshConnections:u}=e,{t:m}=c(),[b,h]=i.exports.useState({error:"",token:""}),g=new URLSearchParams(d().search);return i.exports.useEffect((()=>{const e=g.get("error"),c=g.get("token"),i=g.get("type"),l=g.get("path"),m=g.get("instanceId");if(!e)if("connection"===i){const e=p.get("user");u(e.id)}else{let e=`${l}`;null!=m&&(e+=`?instanceId=${m}`),f(c,e||"/","/")}var d;h((d=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&n(e,t,r[t]);if(o)for(var t of o(r))a.call(r,t)&&n(e,t,r[t]);return e})({},b),r(d,t({error:e,token:c}))))}),[]),b.error&&""!==b.error?l.createElement(j,null,m("user:oauth.authFailed",{service:"Github"}),l.createElement("br",null),b.error):l.createElement(j,null,m("user:oauth.authenticating"))}))),y=()=>l.createElement(g,null);export{y as GithubHomePage,y as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLjBiZDNlNzZmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQtY29yZS9zcmMvdXNlci9jb21wb25lbnRzL09hdXRoL0dpdGh1YkNhbGxiYWNrLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9hdXRoL29hdXRoL2dpdGh1Yi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYXRpb24sIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGxvZ2luVXNlckJ5Snd0LCByZWZyZXNoQ29ubmVjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hdXRoL3NlcnZpY2UnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcbmltcG9ydCB7IHNlbGVjdEF1dGhTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2F1dGgvc2VsZWN0b3InXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMsIERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogYW55KTogYW55ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzZWxlY3RBdXRoU3RhdGUoc3RhdGUpXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaCk6IGFueSA9PiAoe1xuICBsb2dpblVzZXJCeUp3dDogYmluZEFjdGlvbkNyZWF0b3JzKGxvZ2luVXNlckJ5Snd0LCBkaXNwYXRjaCksXG4gIHJlZnJlc2hDb25uZWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHJlZnJlc2hDb25uZWN0aW9ucywgZGlzcGF0Y2gpXG59KVxuXG5jb25zdCBHaXRodWJDYWxsYmFja0NvbXBvbmVudCA9IChwcm9wcyk6IGFueSA9PiB7XG4gIGNvbnN0IHsgYXV0aCwgbG9naW5Vc2VyQnlKd3QsIHJlZnJlc2hDb25uZWN0aW9ucyB9ID0gcHJvcHNcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBlcnJvcjogJycsIHRva2VuOiAnJyB9XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxuICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBzZWFyY2guZ2V0KCdlcnJvcicpIGFzIHN0cmluZ1xuICAgIGNvbnN0IHRva2VuID0gc2VhcmNoLmdldCgndG9rZW4nKSBhcyBzdHJpbmdcbiAgICBjb25zdCB0eXBlID0gc2VhcmNoLmdldCgndHlwZScpIGFzIHN0cmluZ1xuICAgIGNvbnN0IHBhdGggPSBzZWFyY2guZ2V0KCdwYXRoJykgYXMgc3RyaW5nXG4gICAgY29uc3QgaW5zdGFuY2VJZCA9IHNlYXJjaC5nZXQoJ2luc3RhbmNlSWQnKSBhcyBzdHJpbmdcblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGlmICh0eXBlID09PSAnY29ubmVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF1dGguZ2V0KCd1c2VyJylcbiAgICAgICAgcmVmcmVzaENvbm5lY3Rpb25zKHVzZXIuaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcmVkaXJlY3RTdWNjZXNzID0gYCR7cGF0aH1gXG4gICAgICAgIGlmIChpbnN0YW5jZUlkICE9IG51bGwpIHJlZGlyZWN0U3VjY2VzcyArPSBgP2luc3RhbmNlSWQ9JHtpbnN0YW5jZUlkfWBcbiAgICAgICAgbG9naW5Vc2VyQnlKd3QodG9rZW4sIHJlZGlyZWN0U3VjY2VzcyB8fCAnLycsICcvJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBlcnJvciwgdG9rZW4gfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHN0YXRlLmVycm9yICYmIHN0YXRlLmVycm9yICE9PSAnJyA/IChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge3QoJ3VzZXI6b2F1dGguYXV0aEZhaWxlZCcsIHsgc2VydmljZTogJ0dpdGh1YicgfSl9XG4gICAgICA8YnIgLz5cbiAgICAgIHtzdGF0ZS5lcnJvcn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKSA6IChcbiAgICA8Q29udGFpbmVyPnt0KCd1c2VyOm9hdXRoLmF1dGhlbnRpY2F0aW5nJyl9PC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IEdpdGh1YkNhbGxiYWNrID0gd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHaXRodWJDYWxsYmFja0NvbXBvbmVudCkpIGFzIGFueVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBHaXRodWJDYWxsYmFjayB9IGZyb20gJ0B4cmVuZ2luZS9jbGllbnQtY29yZS9zcmMvdXNlci9jb21wb25lbnRzL09hdXRoL0dpdGh1YkNhbGxiYWNrJ1xuXG5leHBvcnQgY29uc3QgR2l0aHViSG9tZVBhZ2UgPSAoKSA9PiA8R2l0aHViQ2FsbGJhY2sgLz5cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViSG9tZVBhZ2VcbiJdLCJuYW1lcyI6WyJHaXRodWJDYWxsYmFjayIsIndpdGhSb3V0ZXIiLCJjb25uZWN0Iiwic3RhdGUiLCJhdXRoIiwic2VsZWN0QXV0aFN0YXRlIiwiZGlzcGF0Y2giLCJsb2dpblVzZXJCeUp3dCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInJlZnJlc2hDb25uZWN0aW9ucyIsInByb3BzIiwidCIsInVzZVRyYW5zbGF0aW9uIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImVycm9yIiwidG9rZW4iLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJ1c2VMb2NhdGlvbiIsImdldCIsInR5cGUiLCJwYXRoIiwiaW5zdGFuY2VJZCIsInVzZXIiLCJpZCIsInJlZGlyZWN0U3VjY2VzcyIsIkNvbnRhaW5lciIsInNlcnZpY2UiLCJHaXRodWJIb21lUGFnZSJdLCJtYXBwaW5ncyI6IjJvQkFTQSxNQW1EYUEsRUFBaUJDLEVBQVdDLEdBbkRoQkMsSUFDaEIsQ0FDTEMsS0FBTUMsRUFBZ0JGLE9BSUVHLEtBQzFCQyxlQUFnQkMsRUFBbUJELEVBQWdCRCxHQUNuREcsbUJBQW9CRCxFQUFtQkMsRUFBb0JILE1BMkNwQkosRUF4Q1JRLFVBQ3pCTixLQUFFQSxFQUFNRyxpQkFBZ0JFLHNCQUF1QkMsR0FDL0NDLEVBQUVBLEdBQU1DLEtBR1BULEVBQU9VLEdBQVlDLG1CQURMLENBQUVDLE1BQU8sR0FBSUMsTUFBTyxLQUVuQ0MsRUFBUyxJQUFJQyxnQkFBZ0JDLElBQWNGLG9DQUV2QyxXQUNGRixFQUFRRSxFQUFPRyxJQUFJLFNBQ25CSixFQUFRQyxFQUFPRyxJQUFJLFNBQ25CQyxFQUFPSixFQUFPRyxJQUFJLFFBQ2xCRSxFQUFPTCxFQUFPRyxJQUFJLFFBQ2xCRyxFQUFhTixFQUFPRyxJQUFJLGtCQUV6QkwsS0FDVSxlQUFUTSxFQUF1QixPQUNuQkcsRUFBT3BCLEVBQUtnQixJQUFJLFVBQ0hJLEVBQUtDLFFBQ25CLEtBQ0RDLEVBQWtCLEdBQUdKLElBQ1AsTUFBZEMsT0FBdUMsZUFBZUEsT0FDM0NQLEVBQU9VLEdBQW1CLElBQUssdUlBSXBDdkIsU0FBTCxDQUFZWSxNQUFBQSxFQUFPQyxNQUFBQSxTQUMzQixJQUVJYixFQUFNWSxPQUF5QixLQUFoQlosRUFBTVksc0JBQ3pCWSxFQUFELEtBQ0doQixFQUFFLHdCQUF5QixDQUFFaUIsUUFBUywyQkFDdEMsS0FBRCxNQUNDekIsRUFBTVksdUJBR1JZLEVBQUQsS0FBWWhCLEVBQUUsa0NDcERMa0IsRUFBaUIsb0JBQU83QixFQUFEIn0=
