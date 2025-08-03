pragma solidity ^0.4.17;

contract crms{
    struct CriminalRecordsTable{
        string name_of_criminal;
        string dob;
        string aadhar_no;
        string PAN_no;
        string emergency_contact_no;
    }

    CriminalRecordsTable[] public criminalrecordstable;
    address public admin;



    function addCriminal(string name_of_criminal,string dob,
    string aadhar_no,string PAN_no,string emergency_contact_no)
    public {
        CriminalRecordsTable memory newCriminal = CriminalRecordsTable({
            name_of_criminal:name_of_criminal,
            dob:dob,
            aadhar_no:aadhar_no,
            PAN_no:PAN_no,
            emergency_contact_no:emergency_contact_no
        });

        criminalrecordstable.push(newCriminal);
    }



    struct CriminalRecord{
        string family_details;
        string address_details;
        string crime_details;
        string case_details;
        string misc;
    }

  CriminalRecord[] public criminalrecord;

  function addCriminalRecord(string family_details,string address_details,
  string crime_details, string case_details,string misc)
    public {
        CriminalRecord memory newRecord = CriminalRecord({
            family_details:family_details,
            address_details:address_details,
            crime_details:crime_details,
            case_details:case_details,
            misc:misc
        });
        criminalrecord.push(newRecord);
    }

    function returnCriminalRecordLength() public view returns(uint){
        return criminalrecord.length;
    }
    function returnCriminalRecordTableRowLength() public view returns(uint){
        return criminalrecordstable.length;
    }

    struct FIR{
        string datetime;
        string complainant_info;
        string place;
        string incident_details;
        string desc;
    }

    FIR[] public fir_record;
    function addFIR(string datetime,string complainant_info,string place, string incident_details,string desc)public{
        FIR memory new_FIR = FIR({
            datetime:datetime,
            complainant_info:complainant_info,
            place:place,
            incident_details:incident_details,
            desc:desc
        });
        fir_record.push(new_FIR);
    }

       function returnFIRLength() public view returns(uint){
        return fir_record.length;
    }

    struct SHR{
        string name_of_reporter;
        string substance_of_report;
    }
    SHR[] public StationHouseReport;
    function add_SHR(string name_of_reporter, string substance_of_report)public{
        SHR memory new_SHR = SHR({
            name_of_reporter:name_of_reporter,
            substance_of_report:substance_of_report
        });
        StationHouseReport.push(new_SHR);
    }
    function returnSHRLength() public view returns(uint){
     return StationHouseReport.length;
    }

    struct MO{
        string name;
        string mo;
    }
    MO[] public ModusOperandi;
     function add_MO(string name, string mo)public{
        MO memory new_MO = MO({
            name:name,
            mo:mo
        });
        ModusOperandi.push(new_MO);
    }
    function returnMOLength() public view returns(uint){
     return ModusOperandi.length;
    }

    struct KD{
        string name_of_KD;
        string aadhar;
        string PAN;
        string crimedetails;
        string casedetails;
    }
    KD[] public KnownDepredator;
    function add_KD(string name_of_KD,string aadhar,string PAN,string crimedetails,string casedetails)public{
        KD memory new_KD= KD({
            name_of_KD:name_of_KD,
            aadhar:aadhar,
            PAN:PAN,
            crimedetails:crimedetails,
            casedetails:casedetails
        });
        KnownDepredator.push(new_KD);
    }
    function returnKDLength() public view returns(uint){
        return KnownDepredator.length;
    }
}
