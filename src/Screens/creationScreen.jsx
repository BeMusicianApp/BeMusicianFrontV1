import { useState, useEffect } from 'react';
import { getAllAccord } from '../api/backend/accord';
import { createMusique } from '../api/backend/musique';
import { createCompo } from '../api/backend/composer'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Yup from 'yup';
import Input from "../lib/form-and-error-components";

let tabCopy = []
const CreationScreen = () => {
    const [loadAccord, setLoadAccord] = useState([]);
    const [loader, setLoader] = useState({ state: false })
    const [AccordDrop, setAccordDrop] = useState([])
    // const [tabCopy, setTabcopy] = useState([])
    console.log(AccordDrop)

    const select = (e) => {
        const cartSelect = e.target
        // const container = document.createElement('div')
        // container.id="upload"
        // container.className="flex flex-col"
        const AccordAjouter = document.createElement('img')
        const dragComponent = document.createElement('Draggable')
        dragComponent.id = cartSelect.id

        // container.append(AccordAjouter)
        // const btnsuppr = document.createElement('button')
        // container.append(btnsuppr)

        // btnsuppr.innerHTML = "test"
        // btnsuppr.className = "bg-red-500 rounded h-10"
        // btnsuppr.onClick={supprimer}
        const index = tabCopy.push(cartSelect.id)
        const tabIndex = index-1
        console.log(tabIndex)
        AccordAjouter.index = index;
        AccordAjouter.src = cartSelect.src;
        AccordAjouter.className = "rounded h-40 m-2 hover:border-4 hover:border-red-500";
        AccordAjouter.id = cartSelect.id;
        AccordAjouter.title = tabIndex;
        AccordAjouter.draggable = "true"
        AccordAjouter.ondragstart = ()=> moveCard(Event, cartSelect.id);
        //AccordAjouter.role="button";
        AccordAjouter.onclick = () => deleteCart(tabIndex);

        document.getElementById("droptarget").appendChild(AccordAjouter)
        
        console.log(tabCopy)
        setAccordDrop(
            tabCopy
        )
        // document.getElementById("droptarget").appendChild(dragComponent);
        
    }
    //TODO tableau COPY / Camelize
    function allowDrop(ev) {
       // ev.preventDefault();
        
      }

      function drop(ev) {
        //ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }

    const moveCard = (ev, value) => {
        ev.dataTransfer.setData("text", `${value}`);
    }

    const deleteCart = (value) => {
        const cart = document.querySelector(`img[title='${value}']`)
        console.log(cart.title)
        cart.remove()
        tabCopy.splice(cart.title,1)
        tabCopy.map((item,index)=>{
           cart.title = index
            
        })
        //mettre ajours / recreer un tableau
    }

    const handleSubmit = async (values) => {
        const validDropZone = document.getElementById('droptarget')
        const ValidChildren = validDropZone.childNodes
        console.log(ValidChildren)
        const musique = await createMusique(values)
        const tab = []
        for (let i = 0; i < ValidChildren.length; i++) {
            tab.push({ Id_accord: ValidChildren[i].id, ordre_accord: i + 1, Id_musique: musique.data.Id_musique })
        }
        const compo = await createCompo(tab, musique.data.Id_musique)

    }

    const defaultValuesLogin = {
        titre: '',
        artiste: '',
    }

    const schemaFormLogin = Yup.object().shape({
        titre: Yup.string(),
        artiste: Yup.string(),
    })

    useEffect(() => {
        async function fetchdata() {
            const data = await getAllAccord()
            return data.data
        }
        fetchdata()
            .then((data) => {
                setLoadAccord(data)
                setLoader({ state: true })
            })
    }, [])

    if (loader.state === false) {
        return (
            <div>chargement... </div>
        )
    }
    else if (loader.state === true) {
        return (
            <div className="max-h-full">
                <Formik
                    initialValues={defaultValuesLogin}
                    onSubmit={handleSubmit}
                    validationSchema={schemaFormLogin}
                    className="">
                    <Form className="max-h-full">
                        <div className="flex flex-row justify-center">
                            <Field
                                type="text"
                                name="artiste"
                                placeholder="Artiste ou votre pseudo"
                                autoComplete="artiste"
                                component={Input}
                                className="p-2 mt-2 mr-2 w-60"
                                noError />
                            <ErrorMessage
                                name="artiste"
                                component="small"
                                className="text-danger text-red-500" />
                            <Field
                                type="text"
                                name="titre"
                                placeholder="Titre ou nom de l'exercice"
                                autoComplete="titre"
                                component={Input}
                                className="p-2 mt-2 w-60"
                                noError />
                            <ErrorMessage
                                name="titre"
                                component="small"
                                className="text-danger text-red-500" />
                        </div>
                        <div className="flex flex-col max-h-full">
                            <div className="flex flex-row">
                                <div className="dropzone h-96 overflow-y-scroll w-96 grid grid-cols-3 m-2 p-1 border-solid border-2 justify-items-center border-yellow-500">
                                    {loadAccord?.map((item) => {
                                        return (
                                            <div className="w-20" key={item.Id_accord} id={item.Id_accord}>
                                                <div id={item.Id_accord} className="text-white text-lg font-semibold text-center">{item.name}</div>
                                                <img id={item.Id_accord} className="rounded" src={item.image} onClick={select} />
                                            </div>
                                        )
                                    })}
                                </div>

                                <div  id="droptarget"className="dropzone overflow-auto border-dotte border-2 m-2 p-2 border-slate-500 w-full flex flex-row"
                                onDrop={()=>{drop(Event)}} onDragOver={()=>{allowDrop(Event)}}>

                                </div>
                            </div>
                            <div className='h-12 flex justify-center'>
                                <button type="submit" className="bg-green-700 rounded py-2 px-4">Valider</button>

                            </div>
                        </div>

                    </Form>
                </Formik>
            </div>
        );
    }
};
export default CreationScreen