<<<<<<<< HEAD:dist/assets/index-418914c6.js
import{c as r,cE as o,dg as n,V as s}from"./index-8b9ca140.js";/**
========
import{c as r,cv as o,df as n,V as s}from"./index-d9fd53dc.js";/**
>>>>>>>> main:dist/assets/index-a2c6b03a.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),c=o.injectEndpoints({endpoints:e=>({getCountries:e.query({query:t=>`/countries?${t}`,providesTags:["countries"]})}),overrideExisting:!1}),{useGetCountriesQuery:h}=c,i=o.injectEndpoints({endpoints:e=>({getCities:e.query({query:t=>`/cities?${t}`,providesTags:["cities"]})}),overrideExisting:!1}),{useGetCitiesQuery:g}=i,d=n.injectEndpoints({endpoints:e=>({getAddresses:e.query({query:t=>`contact-addresses?${t}`,providesTags:["contact-addresses"]}),createAddress:e.mutation({query:t=>({url:"contact-addresses",method:"POST",body:t}),invalidatesTags:["contact-addresses"]}),updateAddress:e.mutation({query:({addressId:t,updatedAddress:a})=>({url:`contact-addresses/${t}`,method:"PUT",body:a}),invalidatesTags:["contact-addresses"]}),removeAddress:e.mutation({query:t=>({url:`contact-addresses/${t}`,method:"DELETE"}),invalidatesTags:["contact-addresses"]})}),overrideExisting:!1}),{useGetAddressesQuery:v,useCreateAddressMutation:l,useUpdateAddressMutation:T,useRemoveAddressMutation:A}=d,E=s.object({name:s.string().min(1,"Name is required"),email:s.string().email("Enter a valid email address"),phone:s.string().min(10,"Mobile number must be at least 10 digits").regex(/^\d+$/,"Mobile number must contain only digits"),note:s.string().optional(),contact_id:s.number()}),u=n.injectEndpoints({endpoints:e=>({getContactPersons:e.query({query:t=>`contact-persons?${t}`,providesTags:["contact-persons"]}),createContactPerson:e.mutation({query:t=>({url:"contact-persons",method:"POST",body:t}),invalidatesTags:["contact-persons"]}),updateContactPerson:e.mutation({query:({contactPersonId:t,updatedContactPerson:a})=>({url:`contact-persons/${t}`,method:"PUT",body:a}),invalidatesTags:["contact-persons"]}),removeContactPerson:e.mutation({query:t=>({url:`contact-persons/${t}`,method:"DELETE"}),invalidatesTags:["contact-persons"]})}),overrideExisting:!1}),{useGetContactPersonsQuery:P,useCreateContactPersonMutation:q,useUpdateContactPersonMutation:C,useRemoveContactPersonMutation:M}=u,m=n.injectEndpoints({endpoints:e=>({getAttachments:e.query({query:t=>`contact-attachments?${t}`,providesTags:["contact-attachments"]}),createAttachment:e.mutation({query:t=>({url:"contact-attachments",method:"POST",body:t}),invalidatesTags:["contact-attachments"]}),removeAttachment:e.mutation({query:t=>({url:`contact-attachments/${t}`,method:"DELETE"}),invalidatesTags:["contact-attachments"]})}),overrideExisting:!1}),{useGetAttachmentsQuery:$,useCreateAttachmentMutation:f,useRemoveAttachmentMutation:j}=m;export{y as T,T as a,h as b,g as c,v as d,A as e,q as f,C as g,E as h,M as i,P as j,j as k,$ as l,f as m,l as u};
