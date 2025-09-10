

function Profile({size,person}:{size:number,person:string}){
return(
    <div>
<img src="https://i.imgur.com/MK3eW3As.jpg" alt={person} width={size} height={size}/>
</div>
)
}

export default function Galler(){
return(
    <div>
        <section> 
        <h1>Array of faces</h1>
            <Profile size={100} person="Katherine Johnson"/>
            <Profile size={75} person="Katherine Johnson"/>
            <Profile size={50} person="Katherine Johnson"/>
        </section>
    </div>)

}