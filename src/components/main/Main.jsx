import './Main.css';
import { Block } from '../statistic-summary/Block';

export function Main() {
    return (
        <main className="main">
            <div className="firstSection">
                <Block  />
                <Block />
                <Block />
                <Block />

            </div>
            <div className="vidurys">
                <div className="chartas">Monthly revenue </div>
                <div className="advertisment"> advert</div>
            </div>
            <div className="trecias">
                <div className='activities'>
                    <div>
                        <div>logo</div>
                        <div>notification</div>
                        <div>text</div>
                        <div>data</div>
                    </div>
                </div>
                <div>lentele</div>
            </div>





        </main>
    );
}