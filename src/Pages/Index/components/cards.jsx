
export default function Card() {

var windowObjectReference;

function openRequestedPopup() {
// eslint-disable-next-line 
  windowObjectReference = window.open(
    "http://www.localhost:8000/",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}
    return(
        <>
<div className="w-8/8 mt-4">    
<button onClick={() => openRequestedPopup()}> 
<div class="shadow-lg rounded-2xl border border-blue-600  p-4">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
                <img src="https://img.icons8.com/material-rounded/60/26e07f/whatsapp--v2.png" alt="img"/>
                <div class="flex flex-col">
                <span class="font-bold text-md text-black dark:text-white ml-2">
                    WhatsApp
                </span>
                <span class="text-sm text-gray-500 dark:text-white ml-2">
                    ChatBot para WhatsApp
                </span>
                
            </div>
        </div>
    </div>
</div>
</button>



<div className="pt-2 items-center  w-full flex mt-8">
<a href="/admin/configuração"> 
<div class="shadow-lg rounded-2xl border  p-4 ml-2">
    <div class="flex items-center justify-between">
    <img style={{width: 20}}
      src="https://img.icons8.com/color/48/000000/settings--v1.png" alt="img"/> 
       
                <span class="font-bold text-md text-black dark:text-white ml-2">
                    Configuraçãoes
                </span>
    </div>
</div>
</a>

<a href="/admin/contatos"> 
<div class="shadow-lg rounded-2xl border border-blue-600 p-4 ml-2">
    <div class="flex items-center justify-between">
        <img style={{width: 20}}
        src="https://www.pikpng.com/pngl/b/589-5897972_usuario-png-register-icon-in-android-clipart.png" alt="img"/>
        <span class="font-bold text-md text-black dark:text-white ml-2">
     Contatos
    </span>
    </div>
</div>
</a>

<div class="shadow-lg rounded-2xl border border-blue-600 p-4 ml-2">
    <div class="flex items-center justify-between">
    <img style={{width: 20}}
     src="https://www.pikpng.com/pngl/b/589-5897972_usuario-png-register-icon-in-android-clipart.png" alt="img"/>
        <span class="font-bold text-md text-black dark:text-white ml-2">
        Fluxo de Mensagens
        </span>
    </div>
</div>


</div>


</div>

</>


    )
}

