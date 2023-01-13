const HomeScreen = () => {



    return ( 
        <div className="p-2">
            <div className="text-white flex flex-col text-center">
                <h1 className="font-bold"> Bienvenu !</h1>
                <div className="p-2 shadow-xl bg-zinc-700">
                    <h2 className="font-bold">MAJ : 12.01.23</h2>
                        Première mise en ligne !
                    <ul>
                    - Les 4 premières musiques sont disponible dont un tutoriel pour apprendre les premiers accords de base.
                    - première clefs disponible pour les intéractions avec la BDD ! (création de compte, modification profil et création de ses propres partitions) Dans quelques semaine.
                    </ul>
                    
                </div>
                <div className="mt-8 shadow-xl bg-zinc-700">

                
                <div className="p-2">
                    <p>
                        L'objectif de cette application est d'apprendre la musique de façon ludique,
                        c'est à dire sans solfège et de façon autodidacte, cette version n'est qu'un aperçu
                        du concept. Beaucoup de fonctionalité sont déjà codé, et seront disponible une fois qu'i
                        y aura plus de contenu (ce qui est très long car je développe seul).
                    </p>
                </div>
            <div className="p-2">
                <h2 className="font-bold">Fonctionnalité en cours de developpement : </h2>
                <ul>
                    <li>- la V1 du player</li>
                    <li>- la création de compte : pour le moment indisponible mais est déjà codé et prête à l'emploie.</li>
                    <li>- la création de ses propres partitions.</li>
                    <li>- la modification de son profil.</li>
                    <li>- système de notation.</li>
                </ul>
            </div>
            <div className="p-2">
                <h2 className="font-bold">Technologie utilisé : </h2>
                <ul>
                    <li>- React JS / HTML / CSS / Tailwind pour le front.</li>
                    <li>- Node Js / sequilize pour le back.</li>
                    <li>- BDD MySQL. </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    );
};

export default HomeScreen;