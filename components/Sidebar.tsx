const Sidebar = () => {
    return ( 
        <section className="w-80 h-screen border-r-2 border-r-indigo-100 float-left bg-gray-900">
            <div className="flex ">
                <label htmlFor=""></label>
                <input name="search" id="name" type="text"/>
                <span>s</span>
                <span>c</span>
            </div>
            <div>
                <span>20 +- 3</span>
                <div>
                    <span>9.8%</span>
                    <span>Wind: WSW 6 mph</span>
                </div>
            </div>
            <div>
                <span></span>
            </div>
        </section>
     );
}
 
export default Sidebar;