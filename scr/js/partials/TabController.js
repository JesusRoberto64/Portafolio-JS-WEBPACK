//TabController.js

export function SetTabController(data, tabListId, tabContentId){
    const tabList = document.getElementById(tabListId)
    const tabContent =document.getElementById(tabContentId)

    data.forEach((tab, index) =>{
        //crear pestaña
        const tabItem = document.createElement('li')
        tabItem.className = 'nav-item'

        const tabLink = document.createElement('a')
        tabLink.className =  tab.isActive ? 'nav-link active': 'nav-link'
        tabLink.id = `${tab.id}-tab`
        tabLink.textContent = tab.title
        tabLink.setAttribute('role', 'tab')
        tabLink.addEventListener('click', ()=> activeTab(index, data))

        tabItem.appendChild(tabLink)
        tabList.appendChild(tabItem)

         //contenido de pestañas
         const tabPane = document.createElement('div')
         tabPane.className = tab.isActive ? 'tab-pane fade show active' : 'tab-pane fade'
         tabPane.id = tab.id
         tabPane.setAttribute('role', 'tabpanel')
         tabPane.setAttribute('aria-labelledby', `${tab.id}-tab`)
         tabPane.innerHTML = tab.content
 
         tabContent.appendChild(tabPane)
        
         Prism.highlightAllUnder(tabPane)

    })

}

function activeTab(index, db){
    deactivateTabs(db)
    const selecteTab = db[index]
    const selecteTabLink = document.getElementById(`${selecteTab.id}-tab`)
    selecteTabLink.className = 'nav-link active'
    document.getElementById(selecteTab.id).className = 'tab-pane fade show active'
}

function deactivateTabs(db){
    db.forEach(tab => {
        document.getElementById(`${tab.id}-tab`).className = 'nav-link'
        document.getElementById(tab.id).className = 'tab-pane fade'
    }) 
}