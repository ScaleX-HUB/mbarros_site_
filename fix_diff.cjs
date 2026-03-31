const fs = require('fs');

let f = fs.readFileSync('src/components/home/DifferentialsSection.tsx', 'utf-8');

const target = "        </div>\n      </div>\n    </section>";
const targetr = "        </div>\r\n      </div>\r\n    </section>";

let replacement = `        </div>

        {/* Call To Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/seja-parceiro" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">
              Quero ser parceiro
            </a>
            <a href="/contato" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8">
              Fale com nosso time
            </a>
          </div>
        </div>
      </div>
    </section>`;

if (f.includes(target)) {
    f = f.replace(target, replacement);
} else if (f.includes(targetr)) {
    f = f.replace(targetr, replacement);
}

fs.writeFileSync('src/components/home/DifferentialsSection.tsx', f);
