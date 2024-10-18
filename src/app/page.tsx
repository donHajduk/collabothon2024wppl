export default function Home() {
    return (
        <main className={"main-content"}>
            <h2>Die wichtigsten Aktivitäten im Überblick</h2>
            <div className="section">
                <div className="section-item">
                    <h3>12 neue Aufträge zur Freigabe</h3>
                    <p>GPP</p>
                    <div className="top-right">NEU</div>
                    <button>Jetzt freigeben</button>
                </div>
                <div className="section-item">
                    <h3>3 neue Aufträge zur Freigabe</h3>
                    <p>Auftragsübersicht</p>
                    <div className="top-right">NEU</div>
                    <button>Jetzt freigeben</button>
                </div>
                <div className="section-item">
                    <h3>0 Nachrichten</h3>
                    <p>Postbox</p>
                    <button>Zur Postbox</button>
                </div>
            </div>

            <div className="overview">
                <div className="overview-item">
                    <h3>Gesamtsaldo aller Produkte: 12.345.678,90 €</h3>
                    <div className="circle-chart"></div>
                </div>
                <div className="overview-item">
                    <h3>Meist genutzte Konten</h3>
                    <ul className="account-list">
                        <li>
                            Premium Geschäftskonto<br/><span
                        >DE99 5004 0000 1122 3344 55</span
                        >
                            +124.593,00 €
                        </li>
                        <li>
                            Premium Geschäftskonto<br/><span
                        >DE99 5004 0000 1122 3344 55</span
                        >
                            -1.500,00 €
                        </li>
                        <li>
                            Premium Geschäftskonto<br/><span
                        >DE99 5004 0000 1122 3344 55</span
                        >
                            +74.482,00 €
                        </li>
                        <li>
                            Premium Geschäftskonto<br/><span
                        >DE99 5004 0000 1122 3344 55</span
                        >
                            +163.500,00 €
                        </li>
                    </ul>
                </div>
            </div>

            <div className="transactions">
                <div className="transaction-item">
                    <p>Ihr Auftrag 123XY wurde freigegeben</p>
                    <small>GPP | 28.09.2023 | 13:45 Uhr</small>
                </div>
                <div className="transaction-item">
                    <p>Ihr Auftrag XYZ123 wurde freigegeben</p>
                    <small>GPP | 28.09.2023 | 11:37 Uhr</small>
                </div>
            </div>
        </main>
    );
}
