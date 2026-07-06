import type { StructureResolver } from 'sanity/structure';

const singleton = (S: Parameters<StructureResolver>[0], title: string, schemaType: string, documentId = schemaType) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.document().schemaType(schemaType).documentId(documentId));

export const structure: StructureResolver = (S) =>
  S.list()
    .title('AWIHF CMS')
    .items([
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('newsArticle').title('News Articles'),
              S.documentTypeListItem('impactStory').title('Impact Stories'),
              S.documentTypeListItem('impactReport').title('Impact Reports'),
              S.documentTypeListItem('program').title('Programmes'),
              S.documentTypeListItem('impactStat').title('Impact Statistics'),
            ])
        ),
      S.listItem()
        .title('People')
        .child(S.list().title('People').items([S.documentTypeListItem('teamMember').title('Team Members')])),
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              singleton(S, 'Site Settings', 'siteSettings'),
              S.documentTypeListItem('heroSection').title('Hero Sections'),
              singleton(S, 'Donation Info', 'donationInfo'),
              S.documentTypeListItem('seoSettings').title('SEO Settings'),
            ])
        ),
      S.listItem()
        .title('Mentorship')
        .child(
          S.list()
            .title('Mentorship')
            .items([
              S.documentTypeListItem('mentorshipPackage').title('Mentorship Packages'),
              singleton(S, 'Application Window', 'applicationWindow'),
            ])
        ),
    ]);
