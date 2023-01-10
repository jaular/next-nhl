import { z } from "zod";

// API: http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard
// JSON to Zod: https://transform.tools/json-to-zod

export const Scoreboard = z.object({
  leagues: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      name: z.string(),
      abbreviation: z.string(),
      slug: z.string(),
      season: z.object({
        year: z.number(),
        startDate: z.string(),
        endDate: z.string(),
        type: z.object({
          id: z.string(),
          type: z.number(),
          name: z.string(),
          abbreviation: z.string(),
        }),
      }),
      logos: z.array(
        z.object({
          href: z.string(),
          width: z.number(),
          height: z.number(),
          alt: z.string(),
          rel: z.array(z.string()),
          lastUpdated: z.string(),
        })
      ),
      calendarType: z.string(),
      calendarIsWhitelist: z.boolean(),
      calendarStartDate: z.string(),
      calendarEndDate: z.string(),
      calendar: z.array(z.string()),
    })
  ),
  season: z.object({ type: z.number(), year: z.number() }),
  day: z.object({ date: z.string() }),
  events: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      date: z.string(),
      name: z.string(),
      shortName: z.string(),
      season: z.object({
        year: z.number(),
        type: z.number(),
        slug: z.string(),
      }),
      competitions: z.array(
        z.object({
          id: z.string(),
          uid: z.string(),
          date: z.string(),
          attendance: z.number(),
          type: z.object({ id: z.string(), abbreviation: z.string() }),
          timeValid: z.boolean(),
          neutralSite: z.boolean(),
          recent: z.boolean(),
          venue: z.object({
            id: z.string(),
            fullName: z.string(),
            address: z.object({
              city: z.string(),
              state: z.string(),
              country: z.string(),
            }),
            capacity: z.number(),
            indoor: z.boolean(),
          }),
          competitors: z.array(
            z.object({
              id: z.string(),
              uid: z.string(),
              type: z.string(),
              order: z.number(),
              homeAway: z.string(),
              team: z.object({
                id: z.string(),
                uid: z.string(),
                location: z.string(),
                name: z.string(),
                abbreviation: z.string(),
                displayName: z.string(),
                shortDisplayName: z.string(),
                color: z.string(),
                alternateColor: z.string(),
                isActive: z.boolean(),
                venue: z.object({ id: z.string() }),
                links: z.array(
                  z.object({
                    rel: z.array(z.string()),
                    href: z.string(),
                    text: z.string(),
                    isExternal: z.boolean(),
                    isPremium: z.boolean(),
                  })
                ),
                logo: z.string(),
              }),
              score: z.string(),
              probables: z.array(
                z.object({
                  name: z.string(),
                  displayName: z.string(),
                  shortDisplayName: z.string(),
                  abbreviation: z.string(),
                  playerId: z.number(),
                  athlete: z.object({
                    id: z.string(),
                    fullName: z.string(),
                    displayName: z.string(),
                    shortName: z.string(),
                    links: z.array(
                      z.object({ rel: z.array(z.string()), href: z.string() })
                    ),
                    headshot: z.string(),
                    jersey: z.string(),
                    position: z.string(),
                    team: z.object({ id: z.string() }),
                  }),
                  status: z.object({
                    id: z.string(),
                    name: z.string(),
                    type: z.string(),
                    abbreviation: z.string(),
                  }),
                  statistics: z.array(z.unknown()),
                })
              ),
              statistics: z.array(
                z.object({
                  name: z.string(),
                  abbreviation: z.string(),
                  displayValue: z.string(),
                })
              ),
              records: z.array(
                z.object({
                  name: z.string(),
                  abbreviation: z.string(),
                  type: z.string(),
                  summary: z.string(),
                })
              ),
              leaders: z.array(
                z.union([
                  z.object({
                    name: z.string(),
                    displayName: z.string(),
                    shortDisplayName: z.string(),
                    abbreviation: z.string(),
                    leaders: z.array(
                      z.object({
                        displayValue: z.string(),
                        value: z.number(),
                        athlete: z.object({
                          id: z.string(),
                          fullName: z.string(),
                          displayName: z.string(),
                          shortName: z.string(),
                          links: z.array(
                            z.object({
                              rel: z.array(z.string()),
                              href: z.string(),
                            })
                          ),
                          headshot: z.string(),
                          jersey: z.string(),
                          position: z.object({ abbreviation: z.string() }),
                          team: z.object({ id: z.string() }),
                          active: z.boolean(),
                        }),
                        team: z.object({ id: z.string() }),
                      })
                    ),
                  }),
                  z.object({
                    name: z.string(),
                    displayName: z.string(),
                    shortDisplayName: z.string(),
                    abbreviation: z.string(),
                    leaders: z.array(
                      z.object({
                        displayValue: z.string(),
                        value: z.number(),
                        athlete: z.object({
                          id: z.string(),
                          fullName: z.string(),
                          displayName: z.string(),
                          shortName: z.string(),
                          links: z.array(
                            z.object({
                              rel: z.array(z.string()),
                              href: z.string(),
                            })
                          ),
                          headshot: z.string(),
                          jersey: z.string(),
                          position: z.object({ abbreviation: z.string() }),
                          team: z.object({ id: z.string() }),
                          active: z.boolean(),
                        }),
                        team: z.object({ id: z.string() }),
                        statistics: z.array(
                          z.object({
                            name: z.string(),
                            displayName: z.string(),
                            shortDisplayName: z.string(),
                            description: z.string(),
                            abbreviation: z.string(),
                            value: z.number(),
                            displayValue: z.string(),
                          })
                        ),
                      })
                    ),
                  }),
                ])
              ),
            })
          ),
          notes: z.array(z.unknown()),
          status: z.object({
            clock: z.number(),
            displayClock: z.string(),
            period: z.number(),
            type: z.object({
              id: z.string(),
              name: z.string(),
              state: z.string(),
              completed: z.boolean(),
              description: z.string(),
              detail: z.string(),
              shortDetail: z.string(),
            }),
          }),
          broadcasts: z.array(
            z.object({ market: z.string(), names: z.array(z.string()) })
          ),
          format: z.object({ regulation: z.object({ periods: z.number() }) }),
          tickets: z.array(
            z.object({
              summary: z.string(),
              numberAvailable: z.number(),
              links: z.array(z.object({ href: z.string() })),
            })
          ),
          startDate: z.string(),
          geoBroadcasts: z.array(
            z.object({
              type: z.object({ id: z.string(), shortName: z.string() }),
              market: z.object({ id: z.string(), type: z.string() }),
              media: z.object({ shortName: z.string() }),
              lang: z.string(),
              region: z.string(),
            })
          ),
          odds: z.array(
            z.object({
              provider: z.object({
                id: z.string(),
                name: z.string(),
                priority: z.number(),
              }),
              details: z.string(),
              overUnder: z.number(),
            })
          ),
        })
      ),
      links: z.array(
        z.object({
          language: z.string(),
          rel: z.array(z.string()),
          href: z.string(),
          text: z.string(),
          shortText: z.string(),
          isExternal: z.boolean(),
          isPremium: z.boolean(),
        })
      ),
      status: z.object({
        clock: z.number(),
        displayClock: z.string(),
        period: z.number(),
        type: z.object({
          id: z.string(),
          name: z.string(),
          state: z.string(),
          completed: z.boolean(),
          description: z.string(),
          detail: z.string(),
          shortDetail: z.string(),
        }),
      }),
    })
  ),
});
