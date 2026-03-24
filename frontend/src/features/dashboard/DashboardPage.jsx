import './DashboardPage.css'
import Card from "../../components/ui/card-click/Card";

export default function Dashboard() {
  return (
    <div>
      <div className="Dash-icon">
        <h1>Dashboard</h1>
      </div>
      <div className="upper-content">
        <Card title='Overview' />
        <Card title='Overview' />
        <Card title='Overview' />
        <Card title='Overview' />
      </div>
    </div>
  )
}