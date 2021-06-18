import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const PageTabs = ({currentTab, handleTabChange}) => {

  return (
    <Tabs
      value={currentTab}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabChange}
    >
      <Tab value={'all'} label="All" />
      <Tab value={'pending'} label="Pending" />
      <Tab value={'completed'} label="Completed" />
    </Tabs>
  )
}

export default PageTabs