import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  getDataForEachType(): Object[] {
    let data = [{
      "section_number": "feature",
      "passage": {
        "image": "",
        "heading": "Collecting Ant Specimens 8-4-3",
        "paras": [{
          "content": "This book will provide a detailed examination of the Little Ice Age..."
        }]
      },
      "sub_sections": [{
        "first": 31,
        "last": 36,
        "type": "feature",
        "duplicatable": false,
        "des": "Classify the following statements as referring to",
        "features": [ "hand colleting", "using bait", "sampling ground litter", "using a pitfall trap" ],
        "text": [
          "It is preferable to take specimens from groups of ants.",
          "It is particularly effective for wet habitats.",
          "It is a good method for species which are hard to find.",
          "Little time and efford is required.",
          "Separate containers are used for individual specimens.",
          "Non-alcoholic preservative should be used."
        ],
      }]
    }, {
      "section_number": "Summary - Select",
      "passage": {
        "image": "",
        "heading": "Summary Select 8-2-2",
        "paras": [{
          "content": "This book will provide a detailed examination of the Little Ice Age..."
        }]
      },
      "sub_sections": [{
        "first": 18,
        "last": 22,
        "type": "summary-select",
        // "source": "select",
        "duplicatable": true,
        "heading": "Weather during the Little Ice Age",
        "paras": [
          "Documentation of past weather conditions is limited: our main sources of knowledge of conditions in the distant past are [] and []. ",
          "We can deduce that Little Ice Age was a time of [], rather than of consistent freezing. Within it there were some periods of very cold winters, others of [] and heavy rain, and yet others that saw [] with no rain at all."
        ],
        "words": [ "climatic shifts", "ice cores", "tree rings", "glaciers", "interactions", "weather observations", "heat waves", "storms", "written accounts" ]
      }]
    }, {
      "section_number": "Summary - Text",
      "passage": {
        "image": "",
        "heading": "Great Migrations 11-3-2",
        "paras": [{
          "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
        }]
      },
      "sub_sections": [{
        "first": 23,
        "last": 26,
        "type": "summary",
        // "source": "text",
        "word_limit": 1,
        "number_limit": 0,
        "heading": "The migration of pronghorns",
        "paras": [
          "Pronghorns rely on their eyesight and [] to population’s summer habitat is a national park, and their winter home is on the [] where they go to avoid the danger presented by the snow at that time of year.",
          "However, their route between these two areas contains three [].",
          "One problem is the construction of new homes in a narrow [] of land on the pronghorns’ route."
        ]
      }]
    }, {
      "section_number": "multi",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "A neuroscientist reveals how to think differently 9-2-1",
        "paras": [{
          "mark": "a",
          "content": "Hearing impairment or other auditory function deficit in young children can have a major impact on their development of speech and communication, resulting in a detrimental effect on their ability to learn at school. This is likely to have major consequences for the individual and the population as a whole. The New Zealand Ministry of Health has found from research carried out over two decades that 6-10% of children in that country are affected by hearing loss."
        }, {
          "mark": "b",
          "content": "A preliminary study in New Zealand has shown that classroom noise presents a major concern for teachers and pupils. Modern teaching practices, the organisation of desks in the classroom, poor classroom acoustics, and mechanical means of ventilation such as air-conditioning units all contribute to the number of children unable to comprehend the teacher's voice. Education researchers Nelson and Soli have also suggested that recent trends in learning often involve collaborative interaction of multiple minds and tools as much as individual possession of information. This all amounts to heightened activity and noise levels, which have the potential to be particularly serious for children experiencing auditory function deficit. Noise in classrooms can only exacerbate their difficulty in comprehending and processing verbal communication with other children and instructions from the teacher."
        }]
      },
      "sub_sections": [{
        "first": 11,
        "last": 12,
        "type": "multiple",
        "limit": 2,
        "des": "The list below includes factors contributing to classroom noise.",
        "choices": [
          "current teaching methods",
          "echoing corridors",
          "cooling systems",
          "large class sizes",
          "loud-voiced teachers",
          "playground games"
        ]
      }]
    }, {
      "section_number": "information",
      "passage": {
        "image": "",
        "heading": "Information theory - the big idea - 9-3-3",
        "sub_heading": "Information theory lies at the heart of everything - from DVD players and the genetic code of DNA to the physics of the univers at its most fundamental. It has been central to the development of the science of communication, which enables data to be sent electronically and has therefore had a major impact on our lives",
        "paras": [{
          "mark": "a",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "b",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "c",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "d",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "e",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "f",
          "content": "In April 2002 an event took...",
        }]
      },
      "sub_sections": [{
        "first": 27,
        "last": 32,
        "type": "information",
        "number_of_paras": 6,
        "text": [
          "an explaination of the factors affecting the transmission of information",
          "an example of how unnecessary information can be omitted",
          "a reference to Shannon's attitude to fame",
          "details of a machine capable of interpreting incomplete information",
          "a detailed account of an incident involving information theory",
          "a reference to what Shannon initially intended to achieve in his research"
        ]
      }]
    }, {
      "section_number": "ending",
      "passage": {
        "image": "",
        "heading": "A neuroscientist reveals how to think differently 9-2-3",
        "paras": [{
          "content": "In the last decade a revolution has occurred in the way..."
        }]
      },
      "sub_sections": [{
        "first": 38,
        "last": 40,
        "type": "ending",
        "duplicatable": true,
        "sentences": [
          "Thinking like a successful iconoclast is demanding because it",
          "The concept of the social brain is useful to iconoclasts because it",
          "Iconoclasts are generally an asset because their way of thinking",
        ],
        "endings": [
          "requires both perceptual and social intelligence skills.",
          "focuses on how groups decide on an action.",
          "works in many fields, both artistic and scientific.",
          "leaves one open to criticism and rejection.",
          "involves understanding how organisations manage people.",
        ]
      }]
    }, {
      "section_number": "sentence",
      "passage": {
        "image": "",
        "heading": "Blah",
        "paras": [{
          "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
        }]
      },
      "sub_sections": [{
        "first": 38,
        "last": 40,
        "type": "sentence",
        "word_limit": 2,
        "number_limit": 0,
        "sentences": [
          "Von Frisch discovered the difference between dance types by changing the position of the [].",
          "The dance outside the hive points in the direction of the [].",
          "The angle of the dance from the vertical shows the angle of the food from the []."
        ]
      }]
    }, {
      "section_number": "true-false",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "William Henry Perkin 9-1-1",
        "sub_heading": "The man who invented synthetic dyes",
        "paras": [{
          "content": "William Henry Perkin was born on March 12,1838, in London, England."
        }]
      },
      "sub_sections": [{
        "first": 1,
        "last": 7,
        "type": "true-false",
        "options": "tf",
        "text": [
          "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
          "Perkin was still young when he made the discovery that made him rich and famous.",
          "The trees from which quinine is derived grow only in South America.",
          "Perkin hoped to manufacture a drug from a coal tar waste product.",
          "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
        ]
      }, {
        "first": 1,
        "last": 7,
        "type": "true-false",
        "options": "yn",
        "text": [
          "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
          "Perkin was still young when he made the discovery that made him rich and famous.",
          "The trees from which quinine is derived grow only in South America.",
          "Perkin hoped to manufacture a drug from a coal tar waste product.",
          "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
        ]
      }]
    }, {
      "section_number": "Short-answer questions",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "William Henry Perkin 9-1-1",
        "sub_heading": "The man who invented synthetic dyes",
        "paras": [{
          "content": "William Henry Perkin was born on March 12,1838, in London, England."
        }]
      },
      "sub_sections": [{
        "first": 8,
        "last": 13,
        "type": "answer",
        "word_limit": 2,
        "number_limit": 0,
        "text": [
          "Before Perkin’s discovery, with what group in society was the colour purple associated?",
          "What potential did Perkin immediately understand that his new dye had?",
          "What was the name finally used to refer to the first colour Perkin invented?",
          "What was the name of the person Perkin consulted before setting up his own dye works?",
          "In what country did Perkin’s newly invented colour first become fashionable?",
          "According to the passage, which disease is now being targeted by researchers using synthetic dyes?",
        ]
      }]
    }, {
      "section_number": "heading",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "The little ice age 8-2-2",
        "sub_heading": "",
        "paras": [{
          "content": "The question of whether we are alone in the Universe has haunted humanity for centuries, but we may now stand poised on the brink of the answer to that question, as we search for radio signals from other intelligent civilisations. This search, often known by the acronym SETI (search for extra-terrestrial intelligence], is a difficult one. Although groups around the world have been searching intermittently for three decades, it is only now that we have reached the level of technology where we can make a determined attempt to search all nearby stars for any sign of life."
        }, {
          "mark": "a",
          "content": "The primary reason for the search is basic curiosity - the same curiosity about the natural world that drives all pure science. We want to know whether we are alone in the Universe. We want to know whether life evolves naturally if given the right conditions, or whether there is something very special about the Earth to have fostered the variety of life forms that we see around us on the planet. The simple detection of a radio signal will be sufficient to answer this most basic of all questions. In this sense, SETI is another cog in the machinery of pure science which is continually pushing out the horizon of our knowledge. However, there are other reasons for being interested in whether life exists elsewhere. For example, we have had civilisation on Earth for perhaps only a few thousand years, and the threats of nuclear war and pollution over the last few decades have told us that our survival may be tenuous. Will we last another two thousand years or will we wipe ourselves out? Since the lifetime of a planet like ours is several billion years, we can expect that, if other civilisations do survive in our galaxy, their ages will range from zero to several billion years. Thus any other civilisation that we hear from is likely to be far older, on average, than ourselves. The mere existence of such a civilisation will tell us that long-term survival is possible, and gives us some cause for optimism. It is even possible that the older civilisation may pass on the benefits of their experience in dealing with threats to survival such as nuclear war and global pollution, and other threats that we haven’t yet discovered."
        }, {
          "mark": "b",
          "content": "In discussing whether we are alone, most SETI scientists adopt two ground rules. First, UFQs (Unidentified Flying Objects) are generally ignored since most scientists don’t consider the evidence for them to be strong enough to bear serious consideration (although it is also important to keep an open mind in case any really convincing evidence emerges in the future). Second, we make a very conservative assumption that we are looking for a life form that is pretty well like us, since if it differs radically from us we may well not recognise it as a life form, quite apart from whether we are able to communicate with it. In other words, the life form we are looking for may well have two green heads and seven fingers, but it will nevertheless resemble us in that it should communicate with its fellows, be interested in the Universe, live on a planet orbiting a star like our Sun, and perhaps most restrictively, have a chemistry, like us, based on carbon and water."
        }, {
          "mark": "c",
          "content": "Even when we make these assumptions, our understanding of other life forms is still severely limited. We do not even know, for example, how many stars have planets, and we certainly do not know how likely it is that life will arise naturally, given the right conditions. However, when we look at the 100 billion stars in our galaxy (the Milky Way), and 100 billion galaxies in the observable Universe, it seems inconceivable that at least one of these planets does not have a life form on it; in fact, the best educated guess we can make, using the little that we do know about the conditions for carbon-based life, leads us to estimate that perhaps one in 100,000 stars might have a life-bearing planet orbiting it. That means that our nearest neighbours are perhaps 100 light years away, which is almost next door in astronomical terms."
        }]
      },
      "sub_sections": [{
        "first": 14,
        "last": 17,
        "type": "heading",
        "headings": [
          "Seeking the transmission of radio signals from planets",
          "Appropriate responses to signals from other civilisations",
          "Vast distances to Earth’s closest neighbours",
          "Assumptions underlying the search for extra-terrestrial intelligence",
          "Reasons for the search for extra-terrestrial intelligence",
          "Knowledge of extra-terrestrial life forms",
          "Likelihood of life on other planets",
          "People have always responded to climate change",
          "Enough food at last"
        ],
        "paras": [{
          "char": "a",
          "answer": 8
        }, {
          "char": "b",
        }, {
          "char": "c",
          "answer": 5
        }, {
          "char": "d",
        }, {
          "char": "e",
        }, {
          "char": "f",
        }]
      }]
    }, {
      "section_number": "single",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "A neuroscientist reveals how to think differently 9-2-3",
        "paras": [{
          "content": "In the last decade a revolution has occurred In the way that scientists think about the brain."
        }, {
          "content": "We now know that the decisions humans make can be traced to the firing patterns of neurons in specific parts of the brain. These discoveries have led to the field known as neuroeconomics, which studies the brain's secrets to success in an economic environment that demands innovation and being able to do things differently from competitors. A brain that can do this is an iconoclastic one. Briefly, an iconoclast is a person who does something that others say can't be done."
        }]
      },
      "sub_sections": [{
        "first": 27,
        "last": 31,
        "type": "single",
        "questions": [{
          "text": "Neuroeconomics is a field of study which seeks to",
          "choices": [
            "cause a change in how scientists understand brain chemistry.",
            "understand how good decisions are made in the brain.",
            "understand how the brain is linked to achievement in competitive fields.",
            "trace the specific firing patterns of neurons in different areas of the brain."
          ]
        }, {
          "text": "According to the writer, iconoclasts are distinctive because",
          "choices": [
            "they create unusual brain circuits.",
            "their brains function differently.",
            "their personalities are distinctive.",
            "they make decisions easily."
          ]
        }, {
          "text": "According to the writer, the brain works efficiently because",
          "choices": [
            "it uses the eyes quickly.",
            "it interprets data logically.",
            "it generates its own energy.",
            "it relies on previous events."
          ]
        }]
      }]
    }];

    return data;
  }

  getReadingTest(id: string): Promise<Object> {
    return new Promise(resolve => {
      // console.log(id);
      this.http.get('http://localhost:3000/reading/' + id).subscribe(result => {
        resolve(result.json());
      });
    });
  }

  getReadingOffline(id: string): Promise<Object> {
    return new Promise(resolve => {
      this.http.get('app/services/read-data.json').subscribe(result => {
        resolve(result.json());
      });
    });
  }

  getListeningOffline(id: string): Promise<Object> {
    return new Promise(resolve => {
      this.http.get('app/services/listen-data.json').subscribe(result => {
        resolve(result.json());
      });
    });
  }

  getWriteOffline(): Promise<Object> {
    return new Promise(resolve => {
      this.http.get('app/services/write-data.json').subscribe(result => {
        resolve(result.json());
      });
    });
  }

  getSpeakOffline(): Promise<Object> {
    return new Promise(resolve => {
      this.http.get('app/services/speak-data.json').subscribe(result => {
        resolve(result.json());
      });
    });
  }

}
