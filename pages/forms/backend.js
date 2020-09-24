export const ProjForm = [
    { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
    { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
    { t: "input", f: "pname", id: "pnmae", p: "Project Name", l: "pname" },
    // { t: "dropdown", f: "ptype", id: "ptype", p: "Project Type", l: "ptype", "menu":["T1","T2","T3"]  },
    // { t: "dropdown", f:"powner", id: "powner", p: "powner", l: "powner", "menu":["T1","T2","T3"]  },
    { t: "input", f: "pdesc", id: "pdesc", p: "Description", l: "pdesc"  },
    { t: "file", f: "pfile", id: "pfile", p: "pfile", l: "File"  }
    
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
    { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
    { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
    { t: "input", f: "momdiscuss", id: "momdiscuss", p: "Discuss", l: "Discuss" },
    { t: "date", f: "sdate", id: "sdate", p: "StartDate", l: "StartDate"  },
    { t: "date", f: "edate", id: "edate", p: "EndDate", l: "EndDate"  },
    { t: "input", f: "momremark", id: "momremark", p: "Remark", l: "Remark"  },
    { t: "input", f: "momdesc", id: "momdesc", p: "Description", l: "Description"  },
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