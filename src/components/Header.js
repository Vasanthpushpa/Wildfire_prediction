import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Wildfire Hotspots Map (Powered By NASA) created by TEAM 281</h1>
        </header>
    )
}

export default Header