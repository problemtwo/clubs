window.onload = function()
{

	var days = [
		"sunday","monday","tuesday","wednesday","thursday","friday","saturday"
	];

	var clubsData = {
		"alanal":
		{
			"tuesday":
				[
				{
					"name":"Scene Changers",
					"time":"4:10 p.m. - 5:00 p.m."
				},
				{
					"name":"Beginner Mandarin",
					"time":"5:00 p.m. - 5:50 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Science",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Scene Changers",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Beginner Ballet",
								"time":"4:10 p.m. - 5:00 p.m."
							}
							]
		},
		"alephp":
		{
			"tuesday":
				[
				{
					"name":"Scene Changers",
					"time":"4:10 p.m. - 5:00 p.m."
				},
				{
					"name":"Beginner Mandarin",
					"time":"5:00 p.m - 5:50 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Science",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Scene Changers",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						]
		},
		"akaashk":
		{
			"monday":
				[
				{
					"name":"Beginner Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"wednesday":[
				{
					"name":"Intermediate/Advanced Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"thursday":[
				{
					"name":"Growfit",
					"time":"5:00 p.m. - 5:50 p.m."
				}
				]
		},
		"anseld":
		{
			"monday":
				[
				{
					"name":"Beginner Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"tuesday":
					[
					{
						"name":"Scene Changers",
						"time":"4:10 p.m. - 5:00 p.m."
					},
					{
						"name":"Beginner Dance",
						"time":"5:00 p.m. - 5:50 p.m."
					}
					],
					"wednesday":
						[
						{
							"name":"Science",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						],
						"thursday":
							[
							{
								"name":"Scene Changers",
								"time":"4:10 p.m. - 5:00 p.m."
							},
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							}
							],
							"friday":
								[
								{
									"name":"Growfit",
									"time":"5:00 p.m. - 5:50 p.m."
								}
								]
		},
		"diyak":
		{
			"wednesday":
				[
				{
					"name":"Science",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				]
		},
		"edenk":
		{
			"monday":
				[
				{
					"name":"Beginner Piano",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Beginner Piano II",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Growfit",
							"time":"5:00 p.m. - 5:50 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							}
							]
		},
		"katerinaa":
		{
			"monday":
				[
				{
					"name":"Beginner Piano",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Beginner Piano II",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Slime",
							"time":"4:00 - 5:00"
						}
						]
		},
		"kais":
		{
			"tuesday":
				[
				{
					"name":"Scene Changers",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				],
				"thursday":
					[
					{
						"name":"Scene Changers",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					]
		},
		"katiem":
		{
			"monday":
				[
				{
					"name":"Beginner Piano",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				],
				"tuesday":
					[
					{
						"name":"Scene Changers",
						"time":"4:10 p.m. - 5:00 p.m."
					},
					{
						"name":"Beginner Dance",
						"time":"5:00 p.m. - 5:50 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Scene Changers",
							"time":"4:10 p.m. - 5:00 p.m."
						},
						{
							"name":"Growfit",
							"time":"5:00 p.m. - 5:50 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Beginner Ballet",
								"time":"4:10 p.m. - 5:00 p.m."
							},
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							}
							]
		},
		"laylak":
		{
			"wednesday":
				[
				{
					"name":"Science",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				],
				"friday":
					[
					{
						"name":"Beginner Ballet",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					]
		},
		"leannel":
		{
			"wednesday":
				[
				{
					"name":"Science",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				]
		},
		"lilyg":
		{
			"monday":
				[
				{
					"name":"Beginner Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"tuesday":
					[
					{
						"name":"Scene Changers",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Scene Changers",
							"time":"4:10 p.m. - 5:00 p.m."
						},
						{
							"name":"Growfit",
							"time":"5:00 p.m. - 5:50 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Beginner Ballet",
								"time":"4:10 p.m. - 5:00 p.m."
							}
							]
		},
		"mirkas":
		{
			"tuesday":
				[
				{
					"name":"Beginner Dance",
					"time":"5:00 p.m. - 5:50 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Beginner Piano II",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"friday":
						[
						{
							"name":"Beginner Ballet",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						]
		},
		"madeleineg":
		{
			"friday":
				[
				{
					"name":"Beginner Ballet",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				]
		},
		"raenak":
		{
			"friday":
				[
				{
					"name":"Beginner Ballet",
					"time":"4:10 p.m. - 5:00 p.m."
				}
				]
		},
		"sandyc":
		{
			"monday":
				[
				{
					"name":"Beginner Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"tuesday":
					[
					{
						"name":"Beginner Mandarin",
						"time":"5:00 p.m. - 5:50 p.m."
					}
					],
					"wednesday":
						[
						{
							"name":"Science",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Beginner Ballet",
								"time":"4:10 p.m. - 5:00 p.m."
							},
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							},
							]
		},
		"shelbyh":
		{
			"tuesday":
				[
				{
					"name":"Beginner Mandarin",
					"time":"5:00 p.m. - 5:50 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Beginner Piano II",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"friday":
						[
						{
							"name":"Beginner Ballet",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						]
		},
		"yuvrajs":
		{
			"monday":
				[
				{
					"name":"Beginner Chess",
					"time":"5:00 p.m. - 5:55 p.m."
				}
				],
				"tuesday":
					[
					{
						"name":"Scene Changers",
						"time":"4:10 p.m. - 5:00 p.m."
					},
					{
						"name":"Beginner Dance",
						"time":"5:00 p.m. - 5:50 p.m."
					}
					],
					"wednesday":
						[
						{
							"name":"Science",
							"time":"4:10 p.m. - 5:00 p.m."
						}
						],
						"thursday":
							[
							{
								"name":"Scene Changers",
								"time":"4:10 p.m. - 5:00 p.m."
							},
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							}
							],
							"friday":
								[
								{
									"name":"Growfit",
									"time":"5:00 p.m. - 5:50 p.m."
								}
								]
		},
		"zohayrn":
		{
			"tuesday":
				[
				{
					"name":"Scene Changers",
					"time":"4:10 p.m. - 5:00 p.m."
				},
				{
					"name":"Beginner Dance",
					"time":"5:00 p.m. - 5:50 p.m."
				}
				],
				"wednesday":
					[
					{
						"name":"Science",
						"time":"4:10 p.m. - 5:00 p.m."
					}
					],
					"thursday":
						[
						{
							"name":"Scene Changers",
							"time":"4:10 p.m. - 5:00 p.m."
						},
						{
							"name":"Growfit",
							"time":"5:00 p.m. - 5:50 p.m."
						}
						],
						"friday":
							[
							{
								"name":"Growfit",
								"time":"5:00 p.m. - 5:50 p.m."
							}
							]
		}
	};

	document.getElementById('first-name').onkeydown = function(ev)
	{
		if(ev.keyCode === 13)
		{
			ev.preventDefault();
			if(document.getElementById('last-initial').value === '')
			{
				document.getElementById('last-initial').focus();
			}
			else
			{
				document.getElementById('search').click();
			}
		}
	}

	document.getElementById('last-initial').onkeydown = function(ev)
	{
		if(ev.keyCode === 13)
		{
			ev.preventDefault();
			if(document.getElementById('first-name').value === '')
			{
				document.getElementById('first-name').focus();
			}
			else
			{
				document.getElementById('search').click();
			}
		}
	}

	function add_node(title,subtitle)
	{
		subtitle = (typeof subtitle === 'undefined') ? '' : subtitle;

		var template = document.getElementById('t-club');
		var node = document.importNode(template.content,true).children[0];

		node.firstElementChild.style.fontFamily = 
			node.lastElementChild.style.fontFamily = 'Lato';

		node.firstElementChild.innerHTML = title;
		node.lastElementChild.innerHTML = subtitle;

		document.getElementById('clubs').appendChild(node);
	}

	document.getElementById('search').onclick = function()
	{
		var firstName = document.getElementById('first-name').value.toLowerCase().trim(); // get first name from text area.
		var lastInitial = document.getElementById('last-initial').value.toLowerCase().trim().charAt(0); // get last initial from text area.

		var all_clubs = clubsData[firstName+lastInitial]; // get array of dictionaries representing clubs for specific person.

		var par = document.getElementById('clubs'); // parent node.
		while(par.firstChild){par.removeChild(par.firstChild);} // clear all child nodes.

		if(typeof all_clubs === 'undefined') // if there are no clubs.
		{
			add_node('No clubs today.'); // add node displaying `no clubs today message.`
			return; // return from the function.
		}
		var clubs = all_clubs[days[new Date().getDay()]]; // get the set of clubs on the given day.
		if(typeof clubs === 'undefined') // if there are no clubs TODAY
		{
			add_node('No clubs today.');
			return;
		}

		for(var i=0;i<clubs.length;i++) // for all of the clubs that this person has today.
		{
			add_node(clubs[i].name,clubs[i].time); // add new nodes with their name and time.
		}
	}
}
