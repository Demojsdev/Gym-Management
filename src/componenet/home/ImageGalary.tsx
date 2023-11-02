import {
  Card,
  CardBody,
  Typography,
  Checkbox,
  CardFooter,
} from "@material-tailwind/react";

const images = [
  {
    name: "iamge 1",
    checked: false,
    id: 1,
  },
  {
    name: "iamge 2",
    checked: false,
    id: 2,
  },
  {
    name: "iamge 3",
    checked: false,
    id: 3,
  },
  {
    name: "iamge 4",
    checked: false,
    id: 4,
  },
];

const ImageGalary = () => {
    const [state,setState] = useState(images)
    const [deleteItem,setDeleteItem] = useState([])
const selectEvent = (id) =>{
state.forEach(item =>{
    if(item.id == id){
        setDeleteItem(deleteItem.push(id))
    }
})
}
  return (
    <section>
        state.map(({id,name,checked})=>(
<Card key={id} onClick={() =>selectEvent()}>
        <CardBody>
          <Typography>Image 1</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Checkbox color="pink" defaultChecked />
        </CardFooter>
      </Card>
        ))
      
    </section>
  );
};

export default ImageGalary;
