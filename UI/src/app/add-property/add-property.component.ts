import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertyFor=['ForSale','Buy/Wanted'];
  isHotProperty = ['Yes','No']
  pendingData = ['Pending', 'Approved', 'Blocked'];
  age;
  amenities;
  facing;
  flooring;
  furnishingStates;
  measurements;
  parkings;
  possession;
  statuses;
  types;
  ownerimages;
  properties = {
    propertyFor:String,
    isHotProperty:String,
    pendingData:String,
    age:null,
  amenities:[],
  facing:null,
  flooring:null,
  furnishingStates:null,
  measurements:null,
  parkings:[],
  possessions:null,
  statuses:null,
  types:null,
  country:null,
  states:null,
  districts:null,
  mandals:null,
  villages:null,
  propery_description:null,
  property_tittle:null,
  property_area:null,
  property_price:null,
  show_text_on_property:null,
  bedroom:null,
  bathroom:null,
  balcony:null,
  poojaroom:null,
  surventroom:null,
  propertyId:null
  }
  newamenities;
  country;
  states;
  districts;
  mandals;
  villages;
  file:any
  previewImage:any;
  url=[];
  propertyFiles:any
  propertyId;
  propertyLayouts:any;
  resultperoperties:any ={
    properties:[],
    images:[],
    layouts:[]
    }
    allStates;
    allDistricts;
    allMandals;
    allVillages;
    saveeditbtn=""
  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.saveeditbtn="save"
    // this.getAllStates()
    // this.getAllDistricts();
    // this.getAllMandals();
    // this.getAllVillages();
    this.route.data.subscribe(data=>{
      this.country = data.country_Resolver;
     
      if(data.country_Resolver){
       // this.getMasterData()
  
        
      }
    })
    this.route.data.subscribe(data=>{
 this.age = data.masterData_resolver['age'];
      this.amenities = data.masterData_resolver['amenities'];
      this.facing = data.masterData_resolver['facing'];
      console.log(this.facing);
      
      this.flooring = data.masterData_resolver['floorings'];
      this.furnishingStates = data.masterData_resolver['furnishingStates'];
      this.measurements = data.masterData_resolver['measurements'];
      this.parkings = data.masterData_resolver['parkings'];
      this.possession = data.masterData_resolver['possession'];
      this.statuses = data.masterData_resolver['statuses'];
      this.types = data.masterData_resolver['types']
      console.log(data)
      console.log(this.statuses);
      
    })
   // this.getProperties()

    
  }
  // loadproperrty(){
  //   this.getMasterData()
  // }
// getMasterData(){
//   console.log('pavan')
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getAllPropertyDetails().subscribe(result=>{
//     this.flooring = result['floorings'];
//     this.measurements = result['measurements'];
//     console.log(this.measurements)
//     this.age = result['age'];
//     this.amenities = result['amenities'];
//     this.facing = result['facing'];
//     console.log(this.facing);
    
//     this.furnishingStates = result['furnishingStates'];
//     this.parkings = result['parkings'];
//     this.possession = result['possession'];
//     this.statuses = result['statuses'];
//     this.types = result['types']
//     console.log(Object.keys(result).length)
    
    

//   })
// }

  
//   getProperties(){
//     let jsonamenities=[];
//     console.log('pavangetpop')
//     this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getProperties().subscribe(data=>{
//       console.log(data['properties'])
//      // this.resultperoperties = data;
//       console.log(this.resultperoperties)
//       this.resultperoperties.properties = data['properties']
      
// for(let i=0;i<this.resultperoperties.properties.length;i++){
// //   for(let j=0;j<this.resultperoperties.properties[i].amenities.length-1;j++){
// //     jsonamenities.push(JSON.parse(this.resultperoperties.properties[i].amenities[j]))
// //     this.resultperoperties.properties[i]['aminitiesJson']=jsonamenities
// //     console.log(this.resultperoperties.properties)
// // console.log(this.resultperoperties.properties[i].amenities[j])
// //   }
// }
// console.log(this.resultperoperties);

//       console.log(this.resultperoperties.properties[0].amenities)
//       this.resultperoperties.images = data['images'],
//       this.resultperoperties.layouts = data['layouts']


//   for(let item of this.resultperoperties.properties){
//     this.country.find(result=>{
//       if(item.country===result.countryId){
//         item['countryName']=result.countryName;
//       }
//    })
//    this.allStates.find(result=>{
//      console.log(item)
//      console.log(result)
//      if(item.states===result.stateId){
//        item['stateName']=result.stateName
//      }
//    })
//    this.allDistricts.find(result=>{
//     console.log(item)
//     console.log(result)
//     if(item.districts===result.districtId){
//       item['districtName']=result.districtName
//     }
//   })
//   this.allMandals.find(result=>{
//     console.log(item)
//     console.log(result)
//     if(item.mandals===result.mandalId){
//       item['mandalName']=result.mandalName
//       console.log(item)
//     }
//   })
//   this.allVillages.find(result=>{
//     console.log(item)
//     console.log(result)
//     if(item.villages===result.villageId){
//       item['villageName']=result.villageName
//       console.log(item)
//     }
//   })
//    this.facing.find(result=>{
//      if(item.facing===result.menuId){
//        item['facingName']=result.facing
//       }
//      this.flooring.find(result=>{
//        if(item.flooring===result.menuId){
//          item['flooringName']=result.flooring
//          console.log(item['flooring'])
//        }
//      })
//      this.furnishingStates.find(result=>{
//        if(item.furnishingStates===result.menuId){
//          item['furnishingStatesName']=result.furnishingStates
//          console.log(item['furnishingStates'])

//         }
//       })
//       this.measurements.find(result=>{
//         if(item.measurements===result.menuId){
//           item['measurementsName']=result.furnishingStates
//           console.log(item['measurements'])
//         }
//       })
//       this.possession.find(result=>{
//         if(item.possession===result.menuId){
//           item['possessionName']=result.possession
//         }
//       })
//       this.statuses.find(result=>{
//         console.log(result)
//         console.log(item)
//         if(item.statuses===result.menuId){
//           item['statusesName']=result.statuses
//         }
//       })
//       this.types.find(result=>{
//         if(item.types===result.menuId){
//           item['typesName']=result.types
//         }
//       })
//       this.amenities.find(result=>{
//         console.log(result)
//         console.log(item)
        
        
//         // for(let aminities of item.aminities){
//         //   console.log(aminities)
//         // }
//         //item.amenities=JSON.parse(item.amenities)       
        
//         //  for(let i=0;i<item.amenities.length;i++){
//           //     //item.amenities= JSON.parse(item.amenities[i])
//           //    }
//           //  console.log(item.amenities)
          
//           //  if(item.amenities===result.menuId){
//             //    console.log(result.amenities)
//             //   console.log(JSON.parse(result.amenities))
//             //    //item['amenities']=parseDat
//             //  }
//           })
//         })
//       }
   
  
//   // for(let i=0;i<this.facing.length;i++){
//   //   console.log(this.facing[i])
//   //   console.log(this.resultperoperties.properties[i])
//   //   if(this.facing[i]['menuId']===this.resultperoperties.properties[i].facing){
//   //     console.log(this.facing[i])
//   //   }

//   // //this.facing[i].menuId ===this.resultperoperties.properties[i].facing
  
//   // }
//     })
//     console.log(this.resultperoperties)
//   }

  

//   editProperty(item){
//     this.saveeditbtn="Edit"
//     console.log('item',item)
//     this.states=[]
//     this.districts=[]
//     this.mandals=[]
//     this.villages=[]
//     for(let item2 of this.resultperoperties.properties){
//       console.log(item2)
//       console.log(item)
//       if(item2.states===item.states){
//         this.states.push(item2)
//         console.log(this.states)
//       }
//       if(item2.districts===item.districts){
//         this.districts.push(item2)
//       }
//       if(item2.mandals===item.mandals){
//         this.mandals.push(item2)
//         console.log(this.mandals)
//       }
//       if(item2.villages===item.villages){
//         this.villages.push(item2)
//         console.log(this.villages)
//       }
//     }
//     // for(let owner of this.resultperoperties.properties){
//     //   console.log(owner)
//     //   this.resultperoperties.properties = owner
//     // }
//     this.properties.propertyFor=item.propertyFor;
//     this.properties.isHotProperty=item.isHotProperty;
//     this.properties.pendingData=item.pendingData;
//     this.properties.age=item.age;

//     // for(let i=0;i<item.aminitiesJson.length;i++){
//     //   console.log(item.aminitiesJson)
//     //   console.log(this.properties.amenities)
//     //   this.properties['amenitiesJSon']=item.aminitiesJson;
//     //   console.log(this.properties)
//     // }
//     console.log(item.aminitiesJson)
//     this.amenities=item.aminitiesJson;
//     console.log(this.amenities)
//     this.properties.facing=item.facing;
//     this.properties.flooring=item.flooring;
//     this.properties.furnishingStates=item.furnishingStates;
//     this.properties.measurements=item.measurements;
//     this.properties.parkings=item.parkings;
//     this.properties.possessions=item.possessions;
//     this.properties.statuses=item.statuses;

//     this.properties.types=item.types;
//     this.properties.country=item.country;
//     this.properties.states=item.states;
//     this.properties.districts=item.districts;
//     this.properties.mandals=item.mandals;
//     this.properties.villages=item.villages;
//     this.properties.propery_description=item.propery_description;
//     this.properties.property_tittle=item.property_tittle;
//     this.properties.property_area=item.property_area;
//     this.properties.property_price=item.property_price;
//     this.properties.show_text_on_property=item.show_text_on_property;
//     this.properties.bedroom=item.bedroom;
//     this.properties.bathroom=item.bathroom;
//     this.properties.balcony=item.balcony;
//     this.properties.poojaroom=item.poojaroom;
//     this.properties.surventroom=item.surventroom;
//     this.previewImage= item.Ownerimage
//     this.properties.propertyId = item.propertyId
//     console.log(this.properties)
    
//   }

// getStatesBycountryId(countryId){
//   console.log(countryId.target.value)
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getStatesByCountryId(countryId.target.value).subscribe(states=>{
//     this.states = states;
//   })
// }
// getDistrictsByStateId(stateId){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getDistrictsByStateId(stateId.target.value).subscribe(districts=>{
//     this.districts = districts;
//   })
// }
// getMandalsByDistrictId(districtId){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getmandalsByDistrictId(districtId.target.value).subscribe(mandals=>{
//     this.mandals = mandals
//   })
// }
// getVillagesByMandalId(mandalId){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getVillagesByMandalId(mandalId.target.value).subscribe(villages=>{
//     console.log(villages)
//     this.villages = villages
//   })
// }

// getAllStates(){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getAllStates().subscribe(data=>{
//     console.log(data)
//     this.allStates = data;
//   })
// }
// getAllDistricts(){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getAllDistricts().subscribe(data=>{
//     this.allDistricts = data;
//   })
// }
// getAllMandals(){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getAllMandals().subscribe(data=>{
//     this.allMandals = data;
//   })
// }
// getAllVillages(){
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.getAllVillages().subscribe(data=>{
//     this.allVillages = data;
//   })
// }
// ///images


// uploadOwnerImage(event){
// this.file = event.target.files[0]

// console.log(this.file);

// const reader = new FileReader();
//   reader.onload = () => {
//     this.previewImage = reader.result;
// console.log(reader)
// }
// reader.readAsDataURL(this.file)
// }

// uploadPropertyImages(event){
// this.url=[]
// this.propertyFiles = event.target.files
// for(let file of this.propertyFiles) {

//   const reader = new FileReader();


//   reader.onload = (e:any) => {
//     console.log(e.target)
//     this.url.push(e.target.result);
//   }

//   reader.readAsDataURL(file)

// }

// console.log('URLS', this.url);

// }


// uploadLayoutFiles(event){
//   this.propertyLayouts = event.target.files
// }

// /////////***** saving*****


// saveProperty(){
//   console.log("pavan")
//   console.log(this.saveeditbtn)
//   if(this.saveeditbtn==="save"){
//     this.properties.amenities=this.amenities 
//     this.properties.parkings = this.parkings
    
// this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.saveProperty(this.properties,this.file).subscribe(result=>{
//   console.log(result)
//   this.propertyId = result['result']
// console.log(this.propertyId)
// if(result['status']===200){
//   console.log('its entered into propertiesImages')
//   console.log(this.propertyFiles)
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.savePropertyImages(this.propertyFiles,this.propertyId).subscribe(result=>{
    
//     console.log('property images result',result)
//     if(result['status']===200){
//       console.log(result)
//       this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.saveLayoutImages(this.propertyLayouts,this.propertyId).subscribe(result=>{
//         console.log('property layout result',result)
//           if(result['status']===200){
//             console.log(result)
//             this.propertyId='';
//             this.previewImage='';
//             this.url=[]
//             this.propertyFiles='',
//             this.file=''
//             this.formreset()
//           }
//         })
//       }
//     })
//   }else{
//   }
// })

// console.log(this.properties)
// }else{
//   this.  constructor(private customerService : CustomerService,private route:ActivatedRoute) { }.editProperties(this.properties,this.file).subscribe(result=>{
//     console.log(result)
//   })
//   console.log(this.properties)

// }

// }




// formreset(){
//   this.properties = {
//     propertyFor:String,
//     isHotProperty:String,
//     pendingData:String,
//     age:null,
//   amenities:[],
//   facing:null,
//   flooring:null,
//   furnishingStates:null,
//   measurements:null,
//   parkings:[],
//   possessions:null,
//   statuses:null,
//   types:null,
//   country:null,
//   states:null,
//   districts:null,
//   mandals:null,
//   villages:null,
//   propery_description:null,
//   property_tittle:null,
//   property_area:null,
//   property_price:null,
//   show_text_on_property:null,
//   bedroom:null,
//   bathroom:null,
//   balcony:null,
//   poojaroom:null,
//   surventroom:null,
//   propertyId:null
//   }
// }
}


//   constructor() { }

//   ngOnInit() {
//   }

// }
