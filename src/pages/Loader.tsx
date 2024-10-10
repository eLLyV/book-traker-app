import React from 'react';
import { IonItem, IonSpinner, IonPage, IonContent } from '@ionic/react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loader-content">
            <IonSpinner name="crescent" color="secondary"></IonSpinner>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Loader;
