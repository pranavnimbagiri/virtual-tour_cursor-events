AFRAME.registerComponent("cursor-listener",{
    schema:{
        selecteditemid:{
            default:"",
            type:"String"
        }
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const placeid=["taj-mahal","budhapist","eiffel-tower","newyork-city"]
        if (placeid.includes(id)){
            const placescontainer=document.querySelector("#places-container")
            placescontainer.setAttribute("cursor-listener",{
                selecteditemid:id
            })
            this.el.setAttribute("material",{color:"red",opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selecteditemid}=this.data
            if (selecteditemid) {
                const el=document.querySelector(`#${selecteditemid}`)
                const id=el.getAttribute("id")
                if (id==selecteditemid){
                    el.setAttribute("material",{
                        color:"#0077cc",
                        opacity:1
                    })
                }
            }
        })
    }
})