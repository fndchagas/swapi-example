import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule} from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { VerticalTimelinePageComponent } from "./timeline/vertical/vertical-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { TesteComponent } from './teste/teste.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PeopleService } from './people/people.service';


@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        FormsModule,
        ChartistModule,
        AgmCoreModule,
        NgbModule,
        NgxDatatableModule
    ],
    declarations: [
        GalleryPageComponent,
        InvoicePageComponent,
        HorizontalTimelinePageComponent,
        VerticalTimelinePageComponent,
        UserProfilePageComponent,
        SearchComponent,
        FaqComponent,
        KnowledgeBaseComponent,
        PeopleComponent,
        ProfileComponent,
        TesteComponent
    ],
    providers: [
        PeopleService
    ]
})
export class FullPagesModule { }
