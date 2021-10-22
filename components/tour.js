AFRAME.registerComponent("tour",{
    init:function(){
        this.placescontainer=this.el
        this.createcards()
    },
    createcards:function(){
        const thumbnailsref=[
            {
            id:"taj-mahal",
            title:"taj mahal",
            url:"./assets/taj_mahal.png"
            },
            {
            id:"budhapist",
            title:"budhapist",
            url:"./assets/budapest.jpg"
            },
            {
            id:"eiffel-tower",
            title:"eiffeltower",
            url:"./assets/eiffel_tower.jpg"
            },
            {
            id:"newyork-city",
            title:"newyorkcity",
            url:"./assets/new_york_city.png"
            }
        ]
        var previousXpos=-60
        for(var i of thumbnailsref){
            const posx=previousXpos+25
            const posy=10
            const posz=-40
            const pos={x:posx,y:posy,z:posz}
            previousXpos=posx
            const borderel=this.createborder(pos,i.id)
            const thumbnails=this.createthumbnails(i)
            borderel.appendChild(thumbnails)
            const titleel=this.createtitle(pos,i)
            borderel.appendChild(titleel)
            this.placescontainer.appendChild(borderel)
        }
        
    },

    createborder:function(pos,id){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityel.setAttribute("position",pos)
        entityel.setAttribute("material",{color:"#0077cc",opacity:1})
        entityel.setAttribute("cursor-listener",{})
        return entityel
    },

    createthumbnails:function(item){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"circle",radius:9})
        entityel.setAttribute("material",{src:item.url})
        return entityel
    },

    createtitle:function(pos,item){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"#e65100",value:item.title})
        const elpos=pos
        elpos.y=-20
        entityel.setAttribute("position",elpos)
        entityel.setAttribute("visible",true)
        return entityel
    },


})
