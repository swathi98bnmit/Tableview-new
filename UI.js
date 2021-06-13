class UI {

    //#region Modal Menu Static Method
    
    static modalMenu(){
      
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            position: fixed;
            z-index: 100000;
            right: 599px;
            top: 120px;
            left: 200px;
            width: 60%;
            height:500px;
            border-style: solid;
            border-color: lightgray;
            border-width: 1px;
            overflow: auto;
            background-color: rgb(243, 243, 243);
            animation-name: modalopen;
            animation-duration: 0.5s;
            body .modal-dialog { /* Width */
                max-width: 100%;
                width: auto !important;
                display: inline-block;
            }

        `;
        
        const modalContent = document.createElement('div');
        const btn = document.createElement('input')
        modalContent.classList.add("modal-content");
        modalContent.style.cssText = `
			all: unset;
			position: relative;
			float: left;
			padding: 20px;
			width: auto;
			height: 400px;
			border-radius: 100px;
			margin-left:30px;
			margin-bottom:200px;
        `;    
        modalContent.innerHTML = `
        <head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Table view</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			<style>
                table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; font-weight: 400}			  
                td, th { border: 1px solid #dddddd; text-align: left;	padding: 8px; font-weight: 400 ; width:200px; height:50px;}
                th { font-weight: bold;}			  
                tr:nth-child(even) { background-color: #dddddd; font-weight: 400}
                ul { list-style-type: none; font-weight: 400 }
                li { float: left; padding-right: 15px; font-weight: 400;  }                
                button {  color: #fff; background-color: #007bff; border-color; #007bff; font-weight: 400; text-align: center; vertical-align: middle; padding: 7px 15px 7px 15px; border-radius: 0.25rem; }
                
                .content {
                    padding: 0 18px;
                    display: block;
                    overflow: hidden;
                    background-color: #f1f1f1;
                }
                .option {
                    color: #101010;
                    padding: 10px 25px;
                    font-size: 16px;
                    cursor: pointer;
                    -webkit-app-region: no-drag;
                    
                }
                
                .option:hover {
                    background: #909090;
                }
                .brand_col {font-family: BogleWeb; line-height: 22px;}
                .mystyle {width: 10%; height: 10%; border-radius: 50%; color: #fff; background-color: #007bff; border-color; #007bff;  font-size: 10px; text-align: center; vertical-align: middle; padding: 7px 15px 7px 15px; border-radius: 0.25rem;}
			</style>
		</head>
        <body>

        <div id='closeDialog' style='display: flex; justify-content: flex-start; cursor: pointer; color:red;'>
        <span><b>X</b></span>
        </div>
     
        
        <div id="myclass">

        <br/>
            <div>

            
            
                

              <label><b>Font</b></label>
              <button accesskey="i" id="myButton3" type="button">↑</button>
              <button accesskey="h" id="myButton4" type="button">↓</button>
              <br/>
                

                
                <br/>


                <div>


                    <button accesskey="s" id="myButton5" type="button" class="collapsible0">SortBy</button>
                    
                    <div class="content">
                      <button accesskey="s" id="myButton5" type="button" class="collapsible1">Ascending</button>
                    
                                <div class="content">
                                <div id="checkbox_div" style='padding-top: 5px; padding-bottom: 5px;'>
                                
                                    <input type="radio" id="myButtona" >Title Link<br/>
                                    <input type="radio" id="myButtonb" >Company Name<br/>
                                    <input type="radio" id="myButtonc" >Location<br/>
                                    <input type="radio" id="myButtond" >Summary<br/>
                                    <input type="radio" id="myButtona1" > Employment Type<br/>
                                    <input type="radio" id="myButtonb1" >Posted -date<br/>
                                    

                                </div>
                                </div>


                       <button accesskey="s" id="myButton5" type="button" class="collapsible1">Descending</button>
                    
                                <div class="content">
                                <div id="checkbox_div" style='padding-top: 5px; padding-bottom: 5px;'>
                                
                                    <input type="radio" id="myButtone" >Title Link<br/>
                                    <input type="radio" id="myButtonf" >Company Name<br/>
                                    <input type="radio" id="myButtong" >Location<br/>
                                    <input type="radio" id="myButtonh" >Summary<br/>
                                    <input type="radio" id="myButtone1" >Employment Type<br/>
                                    <input type="radio" id="myButtone2" >Posted-date<br/>
                                   
                                    </div>
                                    </div>

                                    </div>

                </div>
                      
                
                
              </div>
                <br/>

            
              <div>
                <button accesskey="9" id="myButton" type="button" class="collapsible">Select attributes</button>
                <div class="content">
                <div id="checkbox_div" style='padding-top: 10px; padding-bottom: 10px;'>
                    
                        <input type="checkbox" id="brand_col" checked> Title Link<br/>
                        <input type="checkbox" id="price_col" checked>Company Name<br/>
                        <input type="checkbox" id="model_col" checked>Location<br/>
                        <input type="checkbox" id="summary_col" checked>Summary<br/>
                        <input type="checkbox" id="employ_col" checked>Employment Type<br/>
                        <input type="checkbox" id="posted_col" checked>Posted-date<br/>

                </div>    
                </div>
                </div>

                


                

            </div>
            
            <table id="mytable" style='width: 100%; margin-top: 20px;'>   
                <tr style="background-color: #FAEBD7; color: black; ">
                     
                    <th style='width: 45%' id="brand_col_head"> Title Link</th>
                    <th style='width: 45%' id="save_col_head"> Save-icon</th>
                    <th style='width: 10%' id="price_col_head">Company Name</th>
                    <th style='width: 30%' id="model_col_head">Location</th>
                    <th style='width: 30%' id="summary_col_head">Summary</th>
                    <th style='width: 30%' id="employ_col_head">Employment Type</th>
                    <th style='width: 30%' id="posted_col_head">Posted-date</th>
                    
                    
                   
                   


                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                   
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-London-Accountant.id11111284?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a></td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="price_col">Carnegie Consulting</td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="model_col">London, UK</td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="summary_col">Are you looking for an Accounting role with a difference? We're working exclusively with a boutique Accounting practice with a prestigious client list, to find a newly-Qualified person or Finalist (ACCA/ACA/CIMA) to join their team. This is a highly visible, client-facing role which entails working commercially and strategically with one of their most important clients on site 2 days a week to offer accounting services, & working on other accounts outside of this.
                    Are you looking for an Accounting role with a difference?
                    
                    We're working exclusively with an Accounting practice with a prestigious client list, to find a newly-Qualified person or Finalist (ACCA/ACA/CIMA) to join their team.
                    
                    This is a highly visible, client-facing role which entails working commercially and strategically with one of their most important clients on site 2 days a week to offer accounting services, as well as working on other accounts outside of this.
                    
                    It is imperative that the holder of this post has outstanding communications skills, specifically in speaking "finance" to non-finance people, and holding their own when it comes to differences of opinion,
                    </td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="employ_col">Full time</td>
                    <td style="max-width:200px; min-width:20px; max-height:20px; min-height:50px; width:200px; height:50px;" class="posted_col">1 day ago</td>
                    
                    

                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-London-Accountant.id11102447?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Carnegie Consulting</td>
                    <td class="model_col">London, UK</td>
                    <td class="summary_col">An accountant is required for an SME Finance company. Qualified and would also consider part-qualified. Excellent opportunity to oversee all areas with plenty of autonomy.
                    An accountant is required to oversee all finances for a West End Finance boutique. The company is a great employer and a prestigious name in their sector. Duties will include:-
                    
                    Monthly forecasting and management reports
                    
                    Budget preparation
                    Liaison with bank/auditor
                    Payroll
                    Reconciling sales and purchase ledger
                    Tax affairs
                    VAT returns
                    Treasury
                    Analysis/reporting on investments etc.
                    
                    
                    
                    </td>
                    <td class="employ_col">Full time
                    </td>
                    <td class="posted_col">1 day ago</td>
                    
                   
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-London-Accountant.id11041360?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Walker Hamill </td>
                    <td class="model_col">London, UK</td>
                    <td class="summary_col">We're recruiting an Accountant on behalf of a UK-based litigation funder seeking a newly qualified accountant to join their London team. The role is incredibly broad and varied, with great scope for learning and development.
                    The successful candidate will report directly to the Finance Director, supporting financial and management reporting and operations of all funds and corporate vehicles. There will also be the opportunity to gain exposure to performance analytics, investor reporting, capital raising and other ad hoc tasks. This is an excellent opportunity to gain experience in all aspects of financial and operational support for a private equity firm.
                    
                    Key responsibilities include:
                    
                    Fund accounting / operations
                    Complex tax and regulatory reporting
                    FCA compliance and monitoring
                    Statutory account preparation and payroll
                    Investor reporting / relations / capital raising
                    The appointee must be a newly qualified accountant (ACA, ACCA, CIMA or equivalent) with a strong academic track record. You will either have strong experience in audit or accounts preparation from a reputable practice firm. You must have good verbal and written communication skills.
                    
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">2 days ago</td>

                    
                   
                    
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-USA-NY-New_York-Accountant.id11081436?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Redstone Commodity Search</td>
                    <td class="model_col">New York, NY, USA</td>
                    <td class="summary_col">Redstone Commodity Search focus on offering 360° search solutions to the global commodities markets. With a competitive coverage of Trading Houses, Producers, Majors, Utilities, Merchants, Hedge Funds, Investment Banks and Brokerages; Redstone Commodity Search can confidently offer you an edge in today's volatile market.
                    Redstone Commodity Search are working with an Agricultural Trading Company looking to bring on board an Accountant to their team in North Dakota.
                    
                    Key Responsibilities / Tasks
                    Successfully completing grain settlements and payments within required timeframe.
                    Process Accounts Payable (A/P) and Accounts Receivable (A/R) of general business expenses (procurement and sales)
                    Run Daily Position Reports while coordinating and settling month-end and physical inventory measurements with DPR
                    Establish and maintain process to ensure accuracy and timeliness of purchase and sales contracts into software system
                    Reporting to the COO
                    </td>
                    <td class="employ_col">Full time
                    </td>
                    <td class="posted_col">1 day ago</td>
                    
                   
                    

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Switzerland-Geneva-Accountant.id11045888?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a> </td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Non-disclosed</td>
                    <td class="model_col"> Geneva, Switzerland</td>
                    <td class="summary_col">Private equity and venture capital investment group, managing closed ended funds with institutional clients, dedicated to investing in Europe and North America. Small and dynamic team, working in close collaboration and experiencing significant growth. We are looking for a dynamic and highly motivated accounting professional to support and develop the accounting, regulatory and reporting operations of the Group.
                    Job description
                    
                    General book keeping and financial statement preparation for operational entities in various jurisdictions
                    Generation of invoices
                    Monthly accounts payable settlement and payroll
                    Preparation of annual tax and regulatory filings
                    Oversee external fund administrator's work for fund accounting, assist and oversee quarterly investor statement preparation
                    Support in cash management, reconciliation and treasury duties
                    Assisting the portfolio managers with preparation of quarterly investment valuations as part of fund reporting
                    Audit preparation and support
                    Overseeing operational budget and cash flow forecasting for various entities
                    Financial KPIs tracking for portfolio entities </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">5 days ago</td>
                    
                    
                    
                    
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Belgium-Brussels-Accountant.id11159504?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Credendo</td>
                    <td class="model_col">Brussels, Belgium</td>
                    <td class="summary_col">As an Accountant, you will be part of the Finance department of Credendo HQ. By registering the various transactions for the entities entrusted to you, you will contribute to providing all parties involved with a true picture of the capital, the financial situation and results.
                    You will take care of all transactions (Accounts Payable, Purchase Orders, Accounts Receivable, dunning, bank statements, processing of travel expenses, etc.) of Credendo's entities (Credendo - Export Credit Agency, State, Immo Montoyer and Holding CIS) in the general and/or analytical accounts for the daily follow-up of the transactions of these companies.
                    You will ensure the financial closures (yearly, half-yearly and quarterly) in order to be able to present the accounts within the agreed time frame and in a reliable manner.
                    You will serve as backup for filling out the tax declarations for Credendo's entities and you will register the entries linked to these declarations (corporate tax) in accordance with the tax legislation.
                    You will contribute to the reports for control bodies and other parties involved in order to comply with legal obligations.
                    You will optimise the SAP accounting tool and update the booking procedures in order to get the best working method and operational tools that meet the requirements.</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">2 days ago</td>
                    
                    
                   
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Australia-Melbourne-Accountant.id11154964?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Accountant</a> </td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Hays Accountancy & Finance</td>
                    <td class="model_col"> Melbourne VIC, Australia</td>   
                    
                    <td class="summary_col">Completing a varied role with numerous functions across accounting, you will gain excellent growth opportunity
                    Your new company
                    A distributor and exporter of products locally and overseas, this company has a very stable place in their market and a history of long tenure amongst their staff. A great team environment with a welcoming culture, they would provide excellent opportunity in this role.
                    
                    Your new role
                    Preparation of monthly results
                    Assist with the completion of monthly management reports
                    Daily bank reconciliation
                    FBT analysis, BAS return and statements
                    Fixed Assets and depreciation
                    Monthly balance sheet reconciliations
                    Forecasting and variance analysis
                    Low volumes or AP and AR transactions including payments
                    What you'll need to succeed
                    CA or CPA qualified/part qualified
                    Good foundation skills in accounting
                    Ability to communicate with a variety of stakeholders
                    Passion for accounting & a desire to learn
                    
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">3 days ag</td>

                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Hong_Kong-Hong_Kong-Senior_Accountant__Finance_Manager.id10827150?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant / Finance Manager</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Linedata Services (H.K.) Ltd</td>
                    <td class="model_col">Hong Kong</td>
                    <td class="summary_col">We are recruiting a Senior Accountant / Financial Manager to assist the Asia VP Finance to carry out daily accounting and controlling operations for the region.
                    Join the Movement
                    
                    We are transforming the financial services community which is in constant evolution. Like professional dancers we are experts in our field and are defining new pathways for financial services to serve the world. With our agility we make technology simple & Accessible for our users. We all work together to achieve the best solutions for our clients.
                    
                     
                    
                    Essential Duties/Responsibilities
                    
                    Handling full-set accounting, month-end closing, accounting system;
                    Supervision of accounting process
                    Payables end to end process
                    Cash book and bank reconciliation oversight
                    Administration of the billing process
                    Responsible for accurate and timely preparation of payroll journal
                    Other GL accounting
                    Management of Credit control and DSO KPI reporting
                    Cash forecasting
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">3 days ago</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-USA-CT-Hartford-Senior_Accountant.id10943329?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant
                    </a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Selby Jennings Buyside</td>
                    <td class="model_col"> Hartford, CT, USA</td>
                    <td class="summary_col">A Fortune 100 Insurance company is looking for a Senior Accountant with 5+ years of experience within the residential real estate space.
                    This individual will be responsible for monthly and quarterly accounting responsibilities including fund level financial statements, management fees and investor distributions. Along with participating in new product launches, this position will also have close interactions with all different levels and teams within the firm.
                    
                    This firm has huge plans for expansion in the coming months and this position will be a key part of that. With a new fund opening this year and another fund opening next year, this firm shows no signs of slowing down!
                    
                    Requirements:
                    
                    5+ years of accounting experience within the real estate space
                    Master's Degree in Accounting
                    Proficient knowledge of GAAP
                    Experience with Yardi management software preferred
                    This position has the option to sit out of the following locations:
                    
                    Hartford, CT
                    Denver, CO
                    Charlotte, NC</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">1 day ago</td>
                    
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Singapore-Singapore-Senior_Accountant.id10433638?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Selby Jennings</td>
                    <td class="model_col">Singapore</td>
                    <td class="summary_col">Our client is a leading Oil & Gas trading company with strong international presence in the USA, UK, Singapore, India and China HK. They are looking to bring on-board an experienced Accountant to support the CFO in their growing business.
                    Responsibilities:
                    
                    Financial reporting, Month-end Closing, Project Accounting, Annual Budget Exercise and Forecasting
                    Review and liaise with subsidiaries and joint ventures to resolve accounting related matters
                    Work with tax agents and external auditors
                    Assist the manager in overseeing the daily operations of the accounting function
                    Lead finance-related projects to improve productivity and compliance
                    Requirements:
                    
                    Qualified Accountant CA/CPA/ACCA or Degree in Accountancy/Finance
                    Minimum 3 years' relevant accounting experience
                    Knowledge in Commodities (Oil & Gas) markets is a plus
                    Work well independently and in a team
                    Strong communication and interpersonal skills with a keen eye for detail</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">1 day ago</td>
                    
                    
                    
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Luxembourg-Luxembourg-Senior_Accountant.id08843143?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Riverbank SA</td>
                    <td class="model_col"> Luxembourg</td>
                    <td class="summary_col">RiverBank is recruiting an ambitious Senior Accountant for its Luxembourg office.
                    RiverBank is a specialised lender dedicated to financing Small and Medium Enterprises and Real Estate firms in the Netherlands, Germany and France. RiverBank operates under a full European Banking License allowing to cover all European countries.
                    
                    RiverBank’s mission is to combine the best of the fintech and banking world. As experienced bankers, we commit the bank's balance sheet to grant loans which we analyse using a fundamental credit approach. As a fintech player, we digitally source, process and monitor the loans. Riverbank is growing fast both organically and through acquisitions.
                    
                    As a young company, the talent and passion of our people is critical to our success. Together, we share a common set of values rooted in integrity, excellence and strong team work. RiverBank will offer an entrepreneurial environment within the regulatory banking framework - a place for people to learn, to achieve and grow. Our culture will promote diversity and individual perspectives in an international environment, represented by more than 10 nationalities.
                    
                     </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">4 days ago</td>
                    
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/search/?q=accountant&countryCode=US&radius=50&radiusUnit=mi&page=1&pageSize=20&currencyCode=USD&language=en">Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Selby Jennings </td>
                    <td class="model_col">Singapore</td>
                    <td class="summary_col">Our Client, one of an established Oil & Gas Trading company is seeking for a highly motivated and detailed finance & accounting individual to join them and grow in their business.
                    Responsibilities:
                    
                    Guiding and reviewing the work of the accountants to ensure timely and accurate financial close;
                    Work with direct report to establish annual budget and quarterly forecasting;
                    Responsible for preparation of management report and statutory financial statements in accordance to statutory requirements;
                    Conduct a deep-dive business review to ensure reasonableness of PL & BS variance explanation and analysis;
                    Responsible for submission of annual tax filing.
                    Responsible for submission of quarter GST filing.
                    Liaise with auditors and tax agent and handling inquiries, including GTP.
                    Proactive in providing suggestions to improve and streamlining work processes and procedures to improve efficiency, productivity and effectiveness of the team.
                    Review of monthly journals including accruals, provisions and prepayments.
                    Assist the management in all other aspects and adhoc assignments including projects/system enhancements.
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">5 days ago</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-London-Senior_Accountant.id11197818?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant</a> </td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">HFG</td>
                    <td class="model_col"> London, UK</td>
                    <td class="summary_col">The role provides accurate, timely preparation of general accounting records as part of the close process. This includes the preparation of annual statutory financial statements.
                    Head office reporting and production of disclosures under GAAP
                    Production of Board reports and other important MI
                    Advice to the Board on ad hoc technical accounting matters - this includes the application of new IFRS
                    Business planning and forecasting
                    General support across the wider Finances Accounting team, giving opportunity to see and learn new skill sets.
                    A Qualified Accountant (ACA/ ACCA/ CIMA)
                    
                    To be considered for this role you will need to be a commercially minded accountant (ACA/ACCA/CIMA) with several years experienced gained in a Financial Services organisation. This can either be from working as an auditor in the Big 4/top 10 or from within a finance team of a large and complex organisation.
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">5 days ago</td>
                    
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-London-Senior_Accountant.id11197814?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">HFG</td>
                    <td class="model_col">London, UK</td>
                    <td class="summary_col">The role provides accurate, timely preparation of general accounting records as part of the close process. This includes the preparation of annual statutory financial statements.
                    Head office reporting and production of disclosures under GAAP
                    Production of Board reports and other important MI
                    Advice to the Board on ad hoc technical accounting matters - this includes the application of new IFRS
                    Business planning and forecasting
                    General support across the wider Finances Accounting team, giving opportunity to see and learn new skill sets.
                    A Qualified Accountant (ACA/ ACCA/ CIMA)
                    
                    To be considered for this role you will need to be a commercially minded accountant (ACA/ACCA/CIMA) with several years experienced gained in a Financial Services organisation. This can either be from working as an auditor in the Big 4/top 10 or from within a finance team of a large and complex organisation.
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">10 hours ago</td>
                   
                    
                    
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-UK-Rugby-Senior_Accountant.id11087255?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Account</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Lorien</td>
                    <td class="model_col"> Rugby, UK</td>
                    <td class="summary_col">As a tax specialist you'll be part of the Tax Management team which is responsible for managing tax compliance and tax risk for Nationwide.
                    You'll work closely with other areas of the business to ensure that our products and related customer processes are tax compliant, as well as ensuring that all product tax reporting is delivered in line with requirements. You'll be involved in projects to develop new products and to evolve our processes, providing guidance to ensure that tax requirements are understood and well-managed. You'll also liaise with HMRC on tax matters and help with queries from customers relating to product taxes. As part of the wider tax team, you will be involved in other areas of tax and contribute to the overall success of the team.Our Tax Management team uses its specialist knowledge and experience to ensure that Nationwide operates as a low risk organisation for tax purposes, ensuring compliance with tax regulations and that the tax implications of business initiatives and decisions are understood. In doing this, the team protects Nationwide's reputation and keeps the Society safe and secure for our members.</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">3 hours ago</td>
                    
                    
                    

                </tr>   
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Hong_Kong-Hong_Kong-Senior_Accountant_Financial_Reporting_Consolidation__HK45k.id11210274?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant, Financial Reporting (Consolidation) | HK$45k</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Hays Accountancy & Finance Hong Kong</td>
                    <td class="model_col">Hong Kong</td>
                    <td class="summary_col">MNC Investment Conglomerate is hiring a Senior Accountant, Financial Reporting (Consolidation) | HK$45,000
                    MNC Investment Conglomerate is hiring a Senior Accountant, Financial Reporting (Consolidation) | HK$45,000
                    
                    Your new company
                    Your new company is one of Hong Kong's largest investment conglomerates. Operating across APAC, they are expanding their Finance Team with a new headcount. The company is hiring a Senior Accountant, Financial Reporting and Consolidation.
                    
                    Your new role
                    
                    Prepare consolidated management accounts
                    Handle financial analysis
                    Group reporting and financial statement package review
                    Assist on investment project management
                    Audit and tax
                    
                    What you'll need to succeed
                    
                    Bachelor's degree
                    CPA qualification
                    3 Years Big 4 or Commercial Accounting experience
                    Strong team-player mindset with ability to work under pressure
                    
                    What you'll get in return
                    
                    Attractive compensation package and bonus
                    Diverse industry exposure with a Global Investment firm
                    
                    What you need to do now
                    If you are interested in this position or other Accounting positions Financial Services industry, please send your Resume to Florence.Fong@hays.com.hk</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">2 days ago</td>
                    
                    
                   
                </tr>

                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Hong_Kong-Hong_Kong-Assurance_-_Audit_Services_-_Financial_Services_Insurance_Focus_-_Staff_Accountant__Senior_Accountant.id10976672?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Assurance - Audit Services - Financial Services (Insurance Focus) - Staff Accountant / Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Ernst & Young</td>
                    <td class="model_col">Hong Kong</td>
                    <td class="summary_col">Assurance Business Service specialize in delivering high quality and efficient audit and advisory services to a portfolio of clients, understanding the enterprise-wide view of business risk and how this risk can be effectively managed. We use state-of-the-art diagnostic tools to evaluate business processes and controls, and advanced technology in knowledge sharing.

                    We currently are seeking qualified candidates for an excellent career and leadership opportunity in our Assurance Financial Service Organization (FSO) group. Our talented and dedicated FSO professionals deliver audit solutions to many types of entities including funds, banks and insurance companies.
                    
                     
                    
                    Responsibilities:
                    
                    Your key responsibilities
                    
                    Develop/maintain strong working relationships with key business decision makers throughout the year to communicate value and inform them of the firm's scope of services.
                    Provide guidance/expertise and participate in the performance of audit procedures, especially focusing on complex and/or specialized issues.
                    Support the planning, execution and delivery of assurance engagements
                    Work effectively as a team member, sharing responsibility, providing support, maintaining communication and updating senior team members on progress
                    Assist in preparing reports and schedules that will be delivered to clients and other parties
                    Develop and maintain productive working relationships with client personnel
                    Build strong internal relationships within Assurance and across other services
                    Understand and follow workplace policies and procedures
                    Use technology to continually learn, share knowledge with team members, and enhance service delivery. Maintain an educational program to continually develop skills;
                     
                    
                     </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">2 days ago</td>
                    
                    
                   
                </tr>


                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Hong_Kong-Hong_Kong-Assistant_Manager__Senior_Accountant_Management_Analysis_Finance.id11095960?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Assistant Manager / Senior Accountant, Management Analysis, Finance</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">FWD</td>
                    <td class="model_col">Hong Kong</td>
                    <td class="summary_col">Established in Asia in 2013 with a trailblazer mentality, FWD is the primary insurance business of investment group, Pacific Century Group (PCG), with minority shareholders Swiss Re Group, GIC Ventures, RRJ Capital and Hopu Investments.

                    FWD spans 10 markets in Asia including Hong Kong SAR & Macau SAR, Thailand, Indonesia, the Philippines, Singapore, Vietnam, Japan, Malaysia and Cambodia. In Hong Kong, FWD offers life and medical insurance, general insurance, employee benefits, and financial planning. We focus on creating fresh customer experiences and making the insurance journey simpler, faster and smoother, with innovative propositions and easy-to-understand products, supported by digital technology. Through this customer-led approach, FWD aims to be a leading pan-Asian insurer by changing the way people feel about insurance.
                    
                    If you are looking for a company where can fuel your inspiration and cultivate your expertise, join us on our exciting journey.
                    
                    The Job
                    Support the Manager in performing management accounting reporting, analyses, planning, budgeting and forecasting
                    Prepare annual financial budget, quarterly forecast and comparative analysis
                    Prepare management reports and analyse business performance for Senior Management decision making
                    Assist manager to timely deliver management reports and market analysis
                    Act as business partner to provide recommendations to other functions
                    Support regular and ad-hoc business analytical requirements
                    
                    
                    We offer 5-day work, 20-22 days annual leaves, excellent learning & development opportunities and an attractive package to the right candidate.
                    
                    Information collected will be treated in strict confidence and used solely for recruitment purpose. The company will retain all applications no longer than 24 months of which will be destroyed thereafter. When there are vacancies in any of our subsidiaries, holding companies, associated or affiliated companies of, or companies controlled by, or under common control with the Company during that period, we may transfer your application to them for consideration of employment. We are an equal opportunity employer. We do not discriminate on the basis of race, sex, disability or family status in employment process.</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">1 day ago</td>
                    
                    
                   
                </tr>

                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Australia-Brisbane-Senior_Accountant.id11155493?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Senior Accountant</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Hays Accountancy & Finance</td>
                    <td class="model_col">Brisbane, Queensland, Australia</td>
                    <td class="summary_col">Your new company is a leading organisation in the Oil & Gas industry globally and has a stake in numerous projects in the Pacific region. The organisation has a Corporate office located in Brisbane CBD with a finance team responsible for the financial management and preparation of reporting to an overseas head office.

                    Your new role
                    In your new role as Senior Accountant, you will be responsible for the daily financial management tasks, project oversight in cost controlling and Capex and Opex, end of month and assisting with internal risk controls. This role will work as part of a close-knit finance team working collaboratively on a number of key reporting deadlines.</td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">3 days ago</td>
                    
                    
                   
                </tr>


                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.efinancialcareers.com/jobs-Hong_Kong-Hong_Kong-Assistant_Finance_Manager__Senior_Accounting_Officer_-_Food_Production_Leader.id10930966?searchlink=search%2F%3Fq%3Daccountant%26countryCode%3DUS%26radius%3D50%26radiusUnit%3Dmi%26page%3D1%26pageSize%3D20%26currencyCode%3DUSD%26language%3Den&searchId=99b4af4f-8c71-42e0-954d-d862453b417e">Assistant Finance Manager / Senior Accounting Officer - Food Production Leader</a></td>
                    <td class="save-col"><button id="myButton4" type="button">Save</button></td>
                    <td class="price_col">Aim Higher</td>
                    <td class="model_col">Hong Kong</td>
                    <td class="summary_col">Our client is a food production leader, would like to invite talent with Finance background to join their operation team as Assistant Finance Manager.

                    Responsibilities
                    
                    Assist Operation Finance Manager in monthly & year end closing
                    Review Month End Inventory
                    Assist for monthly management reports for senior management
                    Assist Operation Finance Manager in costing analyses
                    Work with various functions to understand the product costing components
                    Review BOM costs & identify costs improvement opportunities
                    Assist in division bi-weekly forecast & annual operating plan
                    Assist in monthly finance presentation
                    Other ad hoc analyses
                    </td>
                    <td class="employ_col">Full time</td>
                    <td class="posted_col">5 days ago</td>
                    
                    
                   
                </tr>
            </table>
            </div>
            </body>`;

        const tagBtn = document.createElement('div');
        tagBtn.setAttribute('id', 'tagBtn');
        tagBtn.innerText = '';
        tagBtn.style.cssText = `background-color: #EAEAEA;`;        

        modalContent.appendChild(tagBtn);
        modal.appendChild(modalContent)
        return modal;
    }
    
    //#endregion
    
    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }
    
    //#endregion

    //#region Add Tag To Menu Static Method
    static addTag(e, tag) {
        // Get rid of trailing white space
        tag = tag.replace(/\s*$/,"").toLowerCase();
         
        // create tag div
        let chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${tag}<span class="closebtn";>&times;</span>`;
        
        // verify tag doesn't already exit TODO: instead of removing the chip, only add it if does not exists
        document.querySelectorAll('.chip').forEach(function(t) {
            if(t.textContent === (tag + '×')) {
                t.remove();
            }
        });

        
        // verify input field has content
        if(tag != '') {
            // append div to menu
            return chip;
        }
    }
    //#endregion
}
