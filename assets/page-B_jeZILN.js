import{o as m,j as t,R as d,d as i,F as p}from"./index-B--zq8vB.js";import{F as n}from"./Form-dKwJ7D30.js";import{b as f}from"./breadcrumn-shape-MNCLhLw8.js";import{P as x}from"./PageMeta-Dcnmfu_U.js";const h=()=>{const[e,a]=m.useState({firstName:"",lastName:"",email:"",message:""}),o=s=>{const{name:c,value:l}=s.target;a({...e,[c]:l})},r=s=>{s.preventDefault(),console.log("Form Data Submitted:",e)};return t.jsxs(n,{onSubmit:r,children:[t.jsxs(d,{children:[t.jsx(i,{lg:6,className:"mb-20",children:t.jsx(n.Control,{type:"text",name:"firstName",placeholder:"First Name",value:e.firstName,onChange:o})}),t.jsx(i,{lg:6,className:"mb-20",children:t.jsx(n.Control,{type:"text",name:"lastName",placeholder:"Last Name",value:e.lastName,onChange:o})}),t.jsx(i,{lg:12,className:"mb-20",children:t.jsx(n.Control,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:o})}),t.jsx(i,{lg:12,className:"mb-20",children:t.jsx(n.Control,{as:"textarea",name:"message",placeholder:"Message",value:e.message,onChange:o})})]}),t.jsxs("div",{className:"ca-radion-btn",children:[t.jsx("input",{type:"radio",id:"saveinfo",name:"fav_language",value:"saveinfo"}),t.jsx("label",{htmlFor:"saveinfo",children:"Save the information's in this browser for next time use"})]}),t.jsx("div",{className:"ca-blg-sen-btn text-start",children:t.jsxs("button",{type:"submit",className:"ca-btn-primary-3 theme-bg-3 text-white br-50",children:[" ","Submit Now"," ",t.jsx("span",{children:t.jsx(p,{style:{fontSize:"30px"}})})]})})]})},g="data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.5%206.5H4.5C3.96957%206.5%203.46086%206.71071%203.08579%207.08579C2.71071%207.46086%202.5%207.96957%202.5%208.5V24.5C2.5%2025.0304%202.71071%2025.5391%203.08579%2025.9142C3.46086%2026.2893%203.96957%2026.5%204.5%2026.5H28.5C29.0304%2026.5%2029.5391%2026.2893%2029.9142%2025.9142C30.2893%2025.5391%2030.5%2025.0304%2030.5%2024.5V8.5C30.5%207.96957%2030.2893%207.46086%2029.9142%207.08579C29.5391%206.71071%2029.0304%206.5%2028.5%206.5ZM26.3%208.5L16.5%2015.28L6.7%208.5H26.3ZM4.5%2024.5V9.41L15.93%2017.32C16.0974%2017.4361%2016.2963%2017.4984%2016.5%2017.4984C16.7037%2017.4984%2016.9026%2017.4361%2017.07%2017.32L28.5%209.41V24.5H4.5Z'%20fill='%230E47A1'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2018.5C15.0111%2018.5%2014.0444%2018.2068%2013.2222%2017.6574C12.3999%2017.1079%2011.759%2016.3271%2011.3806%2015.4134C11.0022%2014.4998%2010.9031%2013.4945%2011.0961%2012.5246C11.289%2011.5546%2011.7652%2010.6637%2012.4645%209.96447C13.1637%209.26521%2014.0546%208.789%2015.0246%208.59608C15.9945%208.40315%2016.9998%208.50217%2017.9134%208.8806C18.8271%209.25904%2019.6079%209.89991%2020.1574%2010.7222C20.7068%2011.5444%2021%2012.5111%2021%2013.5C20.9984%2014.8256%2020.4711%2016.0964%2019.5338%2017.0338C18.5964%2017.9711%2017.3256%2018.4984%2016%2018.5ZM16%2010.5C15.4067%2010.5%2014.8266%2010.6759%2014.3333%2011.0056C13.8399%2011.3352%2013.4554%2011.8038%2013.2284%2012.352C13.0013%2012.9001%2012.9419%2013.5033%2013.0576%2014.0853C13.1734%2014.6672%2013.4591%2015.2018%2013.8787%2015.6213C14.2982%2016.0409%2014.8328%2016.3266%2015.4147%2016.4424C15.9967%2016.5581%2016.5999%2016.4987%2017.1481%2016.2716C17.6962%2016.0446%2018.1648%2015.6601%2018.4944%2015.1667C18.8241%2014.6734%2019%2014.0933%2019%2013.5C18.9992%2012.7046%2018.6829%2011.942%2018.1204%2011.3796C17.558%2010.8171%2016.7954%2010.5008%2016%2010.5Z'%20fill='%230E47A1'/%3e%3cpath%20d='M16%2030.5L7.56401%2020.551C7.44679%2020.4016%207.33078%2020.2513%207.21601%2020.1C5.77571%2018.2014%204.99733%2015.8831%205.00001%2013.5C5.00001%2010.5826%206.15893%207.78473%208.22183%205.72183C10.2847%203.65893%2013.0826%202.5%2016%202.5C18.9174%202.5%2021.7153%203.65893%2023.7782%205.72183C25.8411%207.78473%2027%2010.5826%2027%2013.5C27.0023%2015.882%2026.2243%2018.1991%2024.785%2020.097L24.784%2020.1C24.784%2020.1%2024.484%2020.494%2024.439%2020.547L16%2030.5ZM8.81301%2018.895C8.81301%2018.895%209.04601%2019.203%209.09901%2019.269L16%2027.408L22.91%2019.258C22.954%2019.203%2023.188%2018.893%2023.189%2018.892C24.3662%2017.3411%2025.0024%2015.447%2025%2013.5C25%2011.1131%2024.0518%208.82387%2022.364%207.13604C20.6761%205.44821%2018.387%204.5%2016%204.5C13.6131%204.5%2011.3239%205.44821%209.63605%207.13604C7.94822%208.82387%207.00001%2011.1131%207.00001%2013.5C6.99754%2015.4483%207.63445%2017.3436%208.81301%2018.895Z'%20fill='%230E47A1'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.92979%2011.0142C7.54779%208.49816%209.32179%206.23816%2012.0318%205.41016C12.5127%205.26313%2013.0316%205.30498%2013.4827%205.5272C13.9338%205.74942%2014.2833%206.13528%2014.4598%206.60616L15.3298%208.92616C15.4698%209.29939%2015.4952%209.70595%2015.4025%2010.0937C15.3099%2010.4814%2015.1035%2010.8326%2014.8098%2011.1022L12.2218%2013.4722C12.0942%2013.5892%2011.9992%2013.7374%2011.9459%2013.9021C11.8926%2014.0668%2011.8829%2014.2426%2011.9178%2014.4122L11.9418%2014.5162L12.0038%2014.7762C12.3256%2016.0395%2012.816%2017.2537%2013.4618%2018.3862C14.1652%2019.5896%2015.0382%2020.6855%2016.0538%2021.6402L16.1338%2021.7122C16.263%2021.8268%2016.4197%2021.9061%2016.5886%2021.9422C16.7576%2021.9783%2016.933%2021.97%2017.0978%2021.9182L20.4438%2020.8642C20.824%2020.7448%2021.2313%2020.7417%2021.6133%2020.8554C21.9953%2020.9691%2022.3347%2021.1943%2022.5878%2021.5022L24.1718%2023.4242C24.8318%2024.2242%2024.7518%2025.4002%2023.9938%2026.1062C21.9198%2028.0402%2019.0678%2028.4362%2017.0838%2026.8422C14.6518%2024.8805%2012.6017%2022.488%2011.0358%2019.7842C9.45717%2017.0824%208.40471%2014.107%207.92979%2011.0142ZM14.0158%2014.5442L16.1598%2012.5762C16.7475%2012.0372%2017.1607%2011.335%2017.3463%2010.5595C17.532%209.78406%2017.4817%208.97081%2017.2018%208.22416L16.3338%205.90416C15.9785%204.95666%2015.2753%204.18028%2014.3674%203.73324C13.4596%203.2862%2012.4155%203.20213%2011.4478%203.49816C8.08179%204.52816%205.37979%207.54616%205.95179%2011.3162C6.35179%2013.9482%207.27379%2017.2962%209.30779%2020.7922C10.9972%2023.7076%2013.2087%2026.2872%2015.8318%2028.4022C18.8078%2030.7922%2022.7798%2029.9762%2025.3598%2027.5722C26.098%2026.8848%2026.5461%2025.9416%2026.6126%2024.9351C26.6792%2023.9287%2026.3591%2022.9347%2025.7178%2022.1562L24.1338%2020.2322C23.6271%2019.6171%2022.9482%2019.1675%2022.1842%2018.9408C21.4202%2018.7142%2020.6059%2018.7209%2019.8458%2018.9602L17.0678%2019.8342C16.3505%2019.0946%2015.7223%2018.2737%2015.1958%2017.3882C14.6872%2016.4929%2014.2909%2015.5384%2014.0158%2014.5462V14.5442Z'%20fill='%230E47A1'/%3e%3c/svg%3e",y=()=>{const e=[{image:C,title:"Our Address",content:"25 N CROW POINT RD LINCOLN, RI 02865"},{image:b,title:"Contact Us",content:t.jsx("a",{href:"tel:+14015958647",style:{color:"#ffffff",textDecoration:"none"},children:"+1 401-595-8647"})},{image:g,title:"Email Us",content:t.jsx("a",{href:"mailto:ib.trucking@yahoo.com",style:{color:"#ffffff",textDecoration:"none"},children:"ib.trucking@yahoo.com"})}];return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Contact"}),t.jsx("style",{children:`
        /* Make CTA shape static on Contact page */
        .ca-cta-shape3 { animation: none !important; transform: translateY(0) !important; }
      `}),t.jsxs("main",{style:{backgroundColor:"#000000",minHeight:"100vh"},children:[t.jsxs("section",{className:"ca-breadcrumb-area p-relative z-index-1 fix",style:{backgroundColor:"#000000",paddingTop:"80px",paddingBottom:"40px"},children:[t.jsx("div",{className:"ca-breadcrumb-shape p-absolute bre-sh-1",children:t.jsx("img",{src:f,alt:"Breadcrumb Shape"})}),t.jsx("div",{className:"container",children:t.jsx("div",{className:"ca-breadcrumb-content text-center",children:t.jsx("h2",{className:"ca-breadcrumb-title fnw-600",style:{color:"#ffffff"},children:"Contact Us"})})})]}),t.jsx("section",{className:"ca-contact-inner pt-100 pb-70",style:{backgroundColor:"#000000"},children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:e.map((a,o)=>t.jsx("div",{className:"col-xl-4 col-md-6 mb-30",children:t.jsx("div",{className:"ca-location-3",children:t.jsx("div",{className:"ca-location-icbox",style:{backgroundColor:"#141414",borderRadius:"10px",padding:"30px",minHeight:"180px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",transition:"transform 0.3s ease",cursor:"pointer"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-5px)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[t.jsx("div",{className:"ca-location-icbox-img",children:t.jsx("span",{style:{display:"inline-flex",width:"60px",height:"60px",alignItems:"center",justifyContent:"center",backgroundColor:"#1f2937",borderRadius:"10px"},children:t.jsx("img",{src:a.image,alt:a.title,style:{width:"30px",height:"30px",filter:"brightness(0) invert(1)"}})})}),t.jsxs("div",{className:"ca-location-icbox-text",style:{flex:1},children:[t.jsx("h4",{className:"ca-title fnw-600 pb-16",style:{color:"#ffffff",fontSize:"18px",marginBottom:"10px"},children:a.title}),t.jsx("p",{style:{color:"#ffffff",fontSize:"14px",margin:0,wordBreak:"break-word"},children:a.content})]})]})})})},o))})})}),t.jsx("div",{className:"ca-maps",style:{backgroundColor:"#000000",padding:"0 0 0 0"},children:t.jsx("div",{className:"container",children:t.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289506974609!2d-71.43637068455596!3d41.922934379218084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e44c5e8b7d5b45%3A0x8f8a8f8a8f8a8f8a!2s25%20Crow%20Point%20Rd%2C%20Lincoln%2C%20RI%2002865%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",className:"contact-page__google-map",style:{border:"0",width:"100%",height:"550px",borderRadius:"10px",filter:"invert(1) hue-rotate(180deg) contrast(0.85)"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"IB Trucking Location"})})}),t.jsx("section",{className:"ca-conatct-form1 pb-100",style:{backgroundColor:"#000000",marginTop:"40px"},children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row justify-content-center",children:t.jsx("div",{className:"col-xl-8 col-lg-10",children:t.jsxs("div",{className:"ca-con-rep-form text-center",style:{backgroundColor:"#141414",borderRadius:"15px",padding:"50px 40px"},children:[t.jsx("h4",{className:"ca-title fnw-600 theme-black-3 pb-16",style:{color:"#ffffff",marginBottom:"16px"},children:"Send Us a Message"}),t.jsx("p",{className:"pb-32",style:{color:"#999999",marginBottom:"32px"},children:"Your email address will not be published. Required fields are marked *"}),t.jsx("div",{className:"ca-cmt-from",children:t.jsx(h,{})})]})})})})}),t.jsx("style",{jsx:!0,global:!0,children:`
          /* Override form styles for dark theme */
          .ca-cmt-from input,
          .ca-cmt-from textarea,
          .ca-cmt-from select {
            background-color: #1f2937 !important;
            color: #ffffff !important;
            border: 1px solid #374151 !important;
            border-radius: 8px !important;
            padding: 12px 20px !important;
            transition: all 0.3s ease !important;
          }

          .ca-cmt-from input::placeholder,
          .ca-cmt-from textarea::placeholder {
            color: #9ca3af !important;
          }

          .ca-cmt-from input:focus,
          .ca-cmt-from textarea:focus,
          .ca-cmt-from select:focus {
            background-color: #1f2937 !important;
            border-color: #4b5563 !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
          }

          .ca-cmt-from button[type="submit"],
          .ca-cmt-from .submit-button,
          .ca-cmt-from .btn,
          .ca-cmt-from button.submit,
          .ca-cmt-from .ca-btn-primary-3 {
            display: inline-block !important;
            font-weight: 700 !important;
            padding: 10px 16px !important;
            font-size: 16px !important;
            line-height: 16px !important;
            transition: 0.3s !important;
            position: relative !important;
            z-index: 1 !important;
            border-radius: 50px !important;
            background-color: #d11207 !important;
            color: #ffffff !important;
            border: none !important;
            cursor: pointer !important;
            min-width: 120px !important;
            text-align: center !important;
            outline: none !important;
          }

          .ca-cmt-from button[type="submit"]:hover,
          .ca-cmt-from .submit-button:hover,
          .ca-cmt-from .btn:hover,
          .ca-cmt-from button.submit:hover,
          .ca-cmt-from .ca-btn-primary-3:hover {
            background-color: #dc2626 !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3) !important;
          }

          .ca-cmt-from label {
            color: #ffffff !important;
            text-align: left !important;
            display: block !important;
            margin-bottom: 8px !important;
            font-weight: 500 !important;
          }

          .ca-cmt-from .form-group,
          .ca-cmt-from .form-row {
            margin-bottom: 20px !important;
          }

          /* Ensure all text in form is visible */
          .ca-con-rep-form * {
            color: #ffffff;
          }

          .ca-con-rep-form p {
            color: #999999;
          }

          /* Contact card hover effects */
          .ca-location-icbox a:hover {
            color: #ef4444 !important;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .ca-location-icbox {
              min-height: 150px !important;
            }

            .contact-page__google-map {
              height: 300px !important;
            }

            .ca-con-rep-form {
              padding: 30px 20px !important;
            }
          }

          /* Ensure consistent card heights */
          .ca-location-3 {
            height: 100%;
          }

          .row > [class*='col-'] {
            display: flex;
            flex-direction: column;
          }

          .row > [class*='col-'] .ca-location-3 {
            flex: 1;
          }
        `})]})]})};export{y as default};
