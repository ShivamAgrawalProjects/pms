export const ProjForm = [
  // { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" ,class: 'col-5'},
  // { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey",class: 'col-5' },
  { t: "input", f: "pname", id: "pnmae", p: "Project Name", l: "Project name",class: 'col-5' },
  { t: "dropdown", f: "ptype", id: "ptype", p: "Project Type", l: "Project Type", "menu":["T1","T2","T3"] ,class: 'col-5' },
  { t: "dropdown", f:"powner", id: "powner", p: "powner", l: "Owner", "menu":["T1","T2","T3"] ,class: 'col-5' },
  { t: "input", f: "pdesc", id: "pdesc", p: "Enter description here", l: "Description",class: 'col-10'  },
  { t: "file", f: "pfile", id: "pfile", p: "file", l: "File"  }
  
]
export const SchedMeeting = [
  { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
  { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
  { t: "input", f: "mreason", id: "mreason", p: "Reason", l: "Reason" },
  { t: "date", f: "mdate", id: "mdate", p: "Date", l: "Date"  },
  { t: "dropdown", f:"mtime", id: "mtime", p: "powner", l: "powner", "menu":["T1","T2","T3"]  },
  { t: "dropdown", f: "sprint", id: "sprint", p: "Sprint", l: "Sprint","menu":["T1","T2","T3"]   },
  { t: "dropdown", f: "mduration", id: "mduration", p: "Duration", l: "Duration"  }
]
export const ProjRisk = [
  { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
  { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
  { t: "input", f: "pname", id: "pnmae", p: "Project Name", l: "pname" },
  { t: "dropdown", f: "ptype", id: "ptype", p: "Project Type", l: "ptype","menu":["T1","T2","T3"]   },
  { t: "dropdown", f:"prisk", id: "prisk", p: "Risk", l: "Risk", "menu":["T1","T2","T3"]  },
  { t: "input", f: "prisk", id: "prisk", p: "Description", l: "Description"  },
  { t: "file", f: "pfile", id: "pfile", p: "pfile", l: "File"  }
]
export const MOM = [
  // { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
  // { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
  { t: "input", f: "momdiscuss", id: "momdiscuss", p: "Discuss", l: "Discuss",class: 'col-5' },
  { t: "date", f: "sdate", id: "sdate", p: "StartDate", l: "StartDate",class: 'col-5'  },
  { t: "date", f: "edate", id: "edate", p: "EndDate", l: "EndDate",class: 'col-5'  },
  { t: "input", f: "momremark", id: "momremark", p: "Remark", l: "Remark" ,class: 'col-5' },
  { t: "input", f: "momdesc", id: "momdesc", p: "Description", l: "Description",class: 'col-10'  },
  { t: "file", f: "momfile", id: "momfile", p: "momfile", l: "File"  }
 
]
export const OwnerBacklog = [
  { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
  { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
  { t: "input", f: "OwnBackreq", id: "OwnBackreq", p: "Requirement", l: "Requirement" },
  { t: "date", f: "sdate", id: "sdate", p: "StartDate", l: "StartDate"  },
  { t: "date", f: "edate", id: "edate", p: "EndDate", l: "EndDate"  },
  { t: "input", f: "OwnBackprio", id: "OwnBackprio", p: "Priority", l: "Priority"  },
  { t: "input", f: "OwnBackdesc", id: "OwnBackdesc", p: "Description", l: "Description"  },
  { t: "file", f: "OwnBackfile", id: "OwnBackfile", p: "OwnBackfile", l: "File"  }
 
]
export const ScrumBacklog = [
  { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
  { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
  { t: "input", f: "ScmBackreq", id: "scmBackreq", p: "Task", l: "Task" },
  { t: "date", f: "sdate", id: "sdate", p: "StartDate", l: "StartDate"  },
  { t: "date", f: "edate", id: "edate", p: "EndDate", l: "EndDate"  },
  { t: "input", f: "scmsprint", id: "scmsprint", p: "Sprint", l: "Sprint"  },
  { t: "input", f: "scmasgnto", id: "acmasgnto", p: "Assigned to", l: "assigned to"  },
  { t: "input", f: "scmBackprio", id: "scmBackprio", p: "Priority", l: "Priority"  },
  { t: "input", f: "scmsts", id: "scmsts", p: "status", l: "status"  },
  { t: "input", f: "scmBackdesc", id: "scmBackdesc", p: "Description", l: "Description"  },
  { t: "file", f: "scmBackfile", id: "scmBackfile", p: "scmBackfile", l: "File"  }
 
]






// const sellerForm = [ 
//     {type:"email",id:"sellerEmail",label:"Enter you Email",p:"Email Address..."},
//     {type:"text",id:"sellerName",label:"Full Name",p:"Enter Name..."},
//     {type:"password",id:"sellerPassword",label:"Set Password",p:"Enter Pass..."}
//   ]
  
//    const sellerLogin = [
//     {type:"email",id:"sellerLoginEmail",label:"Email:",class:"col-12"},
//     {type:"password",id:"sellerLoginPass",label:"Password:",class:"col-12"}
//   ]
  
//    const adminForm = [
//     {type:"email",id:"adminEmail",label:"Email:"},
//     {type:"password",id:"adminPass",label:"Password:"}
//   ]
  
//    const adminSignUpForm = [
//     {type:"email",id:"adminSignUpEmail",label:"Email:"},
//     {type:"text",id:"adminSignUpName",label:"Full Name:"},
//     {type:"password",id:"adminSignUpPass",label:"Password:"},
//     {type:"password",id:"adminSignUpConfirmPass",label:"Confirm Password:"}
//   ]
  
//    const sellerBuisnessFrom = [
//     {type:"text",id:"firstname",label:"First Name",class:"col-5"},
//     {type:"text",id:"lastname",label:"Last Name",class:"col-7"},
//     {type:"text",id:"businessname",label:"Business Name",class:"col-12"},
//     {type:"tel",id:"contactno",label:"Contact Number",class:"col-6"},
//     {type:"email",id:"email",label:"Email",class:"col-6"},
//     {type:"text",id:"address",label:"Address",class:"col-12"},
//     {type:"text",id:"city",label:"City",class:"col-6"},
//     {type:"text",id:"state",label:"State / Province",class:"col-6"},
//     {type:"number",id:"zipcode",label:"Zip Code",class:"col-6"},
//     {type:"text",id:"country",label:"Country",class:"col-6"},
//     {type:"text",id:"businesstype",label:"Type of Business",class:"col-12"}
  
//   ]
  
//   const productEditForm = [
//     {type:"text",id:"productname",label:"Product Name",class:"col-8"},
//     {type:"number",id:"quantity",label:"Product Quantity",class:"col-4"},
//     // {type:"text",id:"price",label:"Image",class:"col-6"},
//     // {type:"text",id:"tags",label:"Tag",class:"col-6"},
    
//   ]
  
//   const categoryForm = [
//     {type:"text",id:"name",label:"Add Category",class:"col-4"},
//     {type:"text",id:"subcategory",label:"Add SubCategory",class:"col-4"}
//   ]
  
//   const userLogin = [
//     {type:"email",id:"userEmail",label:"Email:"},
//     {type:"password",id:"userPass",label:"Password:"}
//   ]
  
//   const userSignup = [
//     {type:"email",id:"userSignUpEmail",label:"Email:"},
//     {type:"text",id:"userSignUpName",label:"Full Name:"},
//     {type:"password",id:"userSignUpPass",label:"Password:"},
//     {type:"password",id:"userSignUpConfirmPass",label:"Confirm Password:"}
//   ]
  
//   const billingAddress = [
//     {type:"text",id:"name",label:"Full Name",class:"col-6"},
//     {type:"text",id:"company",label:"Company",class:"col-6"},
//     {type:"text",id:"address1",label:"Address",class:"col-12"},
//     {type:"text",id:"address2",label:"Address2",class:"col-12"},
//     {type:"text",id:"state",label:"State",class:"col-4"},
//     {type:"text",id:"city",label:"City",class:"col-4"},
//     {type:"text",id:"postalcode",label:"Zip Code",class:"col-4"}
//   ]
//   export {sellerForm,sellerLogin,adminForm,adminSignUpForm,sellerBuisnessFrom,productEditForm,categoryForm,userLogin,userSignup,billingAddress}