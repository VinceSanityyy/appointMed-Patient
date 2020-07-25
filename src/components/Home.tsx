import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonPage, IonRouterOutlet } from '@ionic/react';
import { calendar, create, logOut, personCircle, map, informationCircle, people, person, mail } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

import Tab1 from '../pages/Tab1'
import Tab2 from '../pages/Tab2'
import Tab3 from '../pages/Tab3'
export const Home: React.FC = () => {
    return(
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
      </IonRouterOutlet>
      <IonTabBar color="dark" slot="bottom">
        <IonTabButton tab="schedule" href="/tab1">
          <IonIcon icon={calendar} />
          <IonLabel>Appointments</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tab2">
          <IonIcon icon={person} />
          <IonLabel>Doctors</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tab3">
          <IonIcon icon={map} />
          <IonLabel>Clinics</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tab1">
          <IonIcon icon={mail} />
          <IonLabel>Messages</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    )
};

export default Home;