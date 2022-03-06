
export default function styleLoggedInHeader(customer){

  if (!customer) return {"backgroundColor": "white"}
  return{
    "backgroundColor": "rgb(240, 240, 240)",
    "borderStyle": "solid",
    "borderWidth": "4px",
    "borderColor": "rgb(230,230,230)"
    }
}