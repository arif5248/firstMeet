import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MemoryData } from "../types";

interface EditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: MemoryData;
  onSave: (updated: MemoryData) => void;
  onReset: () => void;
}

export function EditorPanel({ isOpen, onClose, data, onSave, onReset }: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState<"general" | "photos" | "cinemagraphs" | "pathway" | "secret">("general");
  
  // Local state copy for edits
  const [edited, setEdited] = useState<MemoryData>({ ...data });

  // Update nested properties or root properties cleanly
  const editField = (field: keyof MemoryData, val: any) => {
    setEdited((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  // Sync edits when properties change externally (e.g. on reset)
  const handleResetClick = () => {
    if (confirm("Are you sure you want to reset all custom memories back to the default story of Shah Amanat Airport?")) {
      onReset();
      // Wait minor tick to allow parent to reset states
      setTimeout(() => {
        setEdited({ ...data });
      }, 50);
    }
  };

  const handleSaveClick = () => {
    onSave(edited);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Shadow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-45"
          />

          {/* Sliding Side Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[480px] bg-white text-stone-900 shadow-2xl z-45 flex flex-col justify-between select-none"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg text-primary flex items-center space-x-2">
                  <span className="material-symbols-outlined">edit_square</span>
                  <span>স্মৃতি কাস্টমাইজ করুন</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">Customize your own layout story space</p>
              </div>
              <button
                onClick={onClose}
                className="text-stone-400 hover:text-stone-700 p-2 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-full"
              >
                <span className="material-symbols-outlined text-sm leading-none">close</span>
              </button>
            </div>

            {/* Quick Internal Nav Tabs */}
            <div className="flex border-b border-stone-200 overflow-x-auto text-xs bg-stone-100 p-1 font-mono">
              {[
                { id: "general", label: "সাধারণ", title: "General" },
                { id: "photos", label: "গ্যালারি", title: "Album" },
                { id: "cinemagraphs", label: "ভিডিও", title: "Videos" },
                { id: "pathway", label: "পথচলা", title: "Milestones" },
                { id: "secret", label: "চিরকুট", title: "Letter" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-2 whitespace-nowrap rounded-sm transition-all font-semibold flex-1 text-center cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-primary shadow-sm border-b-2 border-primary"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  <span className="block">{tab.label}</span>
                  <span className="block text-[8px] font-light opacity-60 uppercase">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Main scrollable body forms */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm font-sans">
              
              {/* TAB 1: GENERAL DEFAULT INFO */}
              {activeTab === "general" && (
                <div className="space-y-5">
                  <h3 className="font-semibold text-primary border-b border-stone-100 pb-2">সাধারণ তথ্যবীথি</h3>
                  
                  {/* Couple logo and Title */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">লোগো / নাম (বাং)</label>
                      <input
                        type="text"
                        value={edited.coupleNameBn}
                        onChange={(e) => editField("coupleNameBn", e.target.value)}
                        className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs bg-stone-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Logo Name (EN)</label>
                      <input
                        type="text"
                        value={edited.coupleNameEn}
                        onChange={(e) => editField("coupleNameEn", e.target.value)}
                        className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs bg-stone-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Hero Title */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">প্রধান হিরো স্লোগান (বাং)</label>
                    <textarea
                      rows={2}
                      value={edited.heroHeadingBn}
                      onChange={(e) => editField("heroHeadingBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs bg-stone-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Hero Heading (EN)</label>
                    <textarea
                      rows={2}
                      value={edited.heroHeadingEn}
                      onChange={(e) => editField("heroHeadingEn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs bg-stone-50 focus:bg-white"
                    />
                  </div>

                  <hr className="border-stone-100 my-4" />

                  {/* First Meeting details */}
                  <h3 className="font-semibold text-primary pt-2">সাক্ষাতের গল্প</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">সাক্ষাত শিরোনাম (বাং)</label>
                      <input
                        type="text"
                        value={edited.reunionHeaderBn}
                        onChange={(e) => editField("reunionHeaderBn", e.target.value)}
                        className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Reunion Title (EN)</label>
                      <input
                        type="text"
                        value={edited.reunionHeaderEn}
                        onChange={(e) => editField("reunionHeaderEn", e.target.value)}
                        className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">সাক্ষাত ছবি লিংক (Main Hotlink URL)</label>
                    <input
                      type="text"
                      value={edited.reunionImage}
                      onChange={(e) => editField("reunionImage", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">ভৌগোলিক স্থান বর্ণনা (বাং)</label>
                    <input
                      type="text"
                      value={edited.reunionLocationBn}
                      onChange={(e) => editField("reunionLocationBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">গল্পের টেক্সট বা অনুভূতি (বাং)</label>
                    <textarea
                      rows={4}
                      value={edited.reunionTextBn}
                      onChange={(e) => editField("reunionTextBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Reunion Story (EN)</label>
                    <textarea
                      rows={4}
                      value={edited.reunionTextEn}
                      onChange={(e) => editField("reunionTextEn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: POLAROID PHOTO SETS */}
              {activeTab === "photos" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-150 pb-2">
                    <h3 className="font-semibold text-primary">সেদিনের গ্যালারি অ্যালবাম (৪টি কার্ড)</h3>
                  </div>

                  {edited.photos.map((photo, i) => (
                    <div key={photo.id} className="p-4 bg-stone-50 border border-stone-200/60 rounded-sm space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-primary font-mono border-b border-stone-200/50 pb-1.5 mb-1">
                        <span>POLAROID PHOTO NO. {i + 1}</span>
                        <span className="text-stone-400">ID: {photo.id}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">ক্যাপশন (বাং)</label>
                          <input
                            type="text"
                            value={photo.captionBn}
                            onChange={(e) => {
                              const updatedPhotos = [...edited.photos];
                              updatedPhotos[i].captionBn = e.target.value;
                              editField("photos", updatedPhotos);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Caption (EN)</label>
                          <input
                            type="text"
                            value={photo.captionEn}
                            onChange={(e) => {
                              const updatedPhotos = [...edited.photos];
                              updatedPhotos[i].captionEn = e.target.value;
                              editField("photos", updatedPhotos);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">তারিখ (Date)</label>
                        <input
                          type="text"
                          value={photo.dateStr}
                          onChange={(e) => {
                            const updatedPhotos = [...edited.photos];
                            updatedPhotos[i].dateStr = e.target.value;
                            editField("photos", updatedPhotos);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">ছবির লিংক URL</label>
                        <input
                          type="text"
                          value={photo.image}
                          onChange={(e) => {
                            const updatedPhotos = [...edited.photos];
                            updatedPhotos[i].image = e.target.value;
                            editField("photos", updatedPhotos);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">পেছনের অনুভূতি চিরকুট (বাং)</label>
                        <textarea
                          rows={2}
                          value={photo.noteBn}
                          onChange={(e) => {
                            const updatedPhotos = [...edited.photos];
                            updatedPhotos[i].noteBn = e.target.value;
                            editField("photos", updatedPhotos);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Diary Note (EN)</label>
                        <textarea
                          rows={2}
                          value={photo.noteEn}
                          onChange={(e) => {
                            const updatedPhotos = [...edited.photos];
                            updatedPhotos[i].noteEn = e.target.value;
                            editField("photos", updatedPhotos);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: CINEMAGRAPHS MOVING MEMORIES */}
              {activeTab === "cinemagraphs" && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-primary border-b border-stone-100 pb-2">চলমান স্মৃতি (Cinemagraphs)</h3>
                  
                  {edited.cinemagraphs.map((video, i) => (
                    <div key={video.id} className="p-4 bg-stone-50 border border-stone-200/65 rounded-sm space-y-3">
                      <div className="text-xs font-bold text-primary font-mono border-b border-stone-200/50 pb-1.5 text-center">
                        VIDEO NO. {i + 1}
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">ভিডিও ছবি URL</label>
                        <input
                          type="text"
                          value={video.image}
                          onChange={(e) => {
                            const updated = [...edited.cinemagraphs];
                            updated[i].image = e.target.value;
                            editField("cinemagraphs", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">শিরোনাম (বাং)</label>
                          <input
                            type="text"
                            value={video.titleBn}
                            onChange={(e) => {
                              const updated = [...edited.cinemagraphs];
                              updated[i].titleBn = e.target.value;
                              editField("cinemagraphs", updated);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Title (EN)</label>
                          <input
                            type="text"
                            value={video.titleEn}
                            onChange={(e) => {
                              const updated = [...edited.cinemagraphs];
                              updated[i].titleEn = e.target.value;
                              editField("cinemagraphs", updated);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">সাবটাইটেল ১ (বাং)</label>
                        <input
                          type="text"
                          value={video.subtitleBn}
                          onChange={(e) => {
                            const updated = [...edited.cinemagraphs];
                            updated[i].subtitleBn = e.target.value;
                            editField("cinemagraphs", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Subtitle (EN)</label>
                        <input
                          type="text"
                          value={video.subtitleEn}
                          onChange={(e) => {
                            const updated = [...edited.cinemagraphs];
                            updated[i].subtitleEn = e.target.value;
                            editField("cinemagraphs", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">বড় বিবরণী গল্প (বাং)</label>
                        <textarea
                          rows={2}
                          value={video.descriptionBn}
                          onChange={(e) => {
                            const updated = [...edited.cinemagraphs];
                            updated[i].descriptionBn = e.target.value;
                            editField("cinemagraphs", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Narrative Detail (EN)</label>
                        <textarea
                          rows={2}
                          value={video.descriptionEn}
                          onChange={(e) => {
                            const updated = [...edited.cinemagraphs];
                            updated[i].descriptionEn = e.target.value;
                            editField("cinemagraphs", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: PATHWAYS TIMELINE MILESTONES */}
              {activeTab === "pathway" && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-primary border-b border-stone-100 pb-2">আমাদের পথচলার টাইমলাইন</h3>
                  
                  {edited.timelineEvents.map((event, i) => (
                    <div key={event.id} className="p-4 bg-stone-50 border border-stone-200/60 rounded-sm space-y-3">
                      <div className="text-xs font-bold text-primary font-mono border-b border-stone-200/50 pb-1 flex justify-between">
                        <span>MILESTONE {i + 1}</span>
                        <span className="text-stone-400">ID: {event.id}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">শিরোনাম (বাং)</label>
                          <input
                            type="text"
                            value={event.titleBn}
                            onChange={(e) => {
                              const updated = [...edited.timelineEvents];
                              updated[i].titleBn = e.target.value;
                              editField("timelineEvents", updated);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Milestone Title (EN)</label>
                          <input
                            type="text"
                            value={event.titleEn}
                            onChange={(e) => {
                              const updated = [...edited.timelineEvents];
                              updated[i].titleEn = e.target.value;
                              editField("timelineEvents", updated);
                            }}
                            className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">ছোট বিবরণী (বাং)</label>
                        <input
                          type="text"
                          value={event.descBn}
                          onChange={(e) => {
                            const updated = [...edited.timelineEvents];
                            updated[i].descBn = e.target.value;
                            editField("timelineEvents", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-500 mb-0.5">Desc (EN)</label>
                        <input
                          type="text"
                          value={event.descEn}
                          onChange={(e) => {
                            const updated = [...edited.timelineEvents];
                            updated[i].descEn = e.target.value;
                            editField("timelineEvents", updated);
                          }}
                          className="w-full border border-stone-300 rounded-sm p-1.5 text-xs bg-white"
                        />
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {/* TAB 5: SECRET NOTE LOCKBOX */}
              {activeTab === "secret" && (
                <div className="space-y-5">
                  <h3 className="font-semibold text-primary border-b border-stone-100 pb-2">গোপন চিরকুট ও তালা চাবি</h3>
                  
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">চিরকুট সেকশন শিরোনাম (বাং)</label>
                    <input
                      type="text"
                      value={edited.secretBoxTitleBn}
                      onChange={(e) => editField("secretBoxTitleBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Section Title (EN)</label>
                    <input
                      type="text"
                      value={edited.secretBoxTitleEn}
                      onChange={(e) => editField("secretBoxTitleEn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>

                  <hr className="border-stone-100" />

                  {/* Password Lock controls */}
                  <h4 className="font-semibold text-stone-800 text-xs uppercase tracking-wider">🔐 লকিং ধাঁধা বা কুইজ</h4>
                  <p className="text-[10px] text-stone-500">
                    If set, the visitor must answer this secret question correctly to unlock the letterbox envelope. Leave answer blank to make it click-to-open directly.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">ধাঁধা প্রশ্ন বা কুইজ (বাং)</label>
                    <input
                      type="text"
                      value={edited.secretQuizQuestionBn}
                      onChange={(e) => editField("secretQuizQuestionBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Quiz Question (EN)</label>
                    <input
                      type="text"
                      value={edited.secretQuizQuestionEn}
                      onChange={(e) => editField("secretQuizQuestionEn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">উত্তর কি হবে? (Password Answer - Case insensitive)</label>
                    <input
                      type="text"
                      value={edited.secretQuizAnswer}
                      onChange={(e) => editField("secretQuizAnswer", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs font-mono"
                      placeholder="e.g. Chattogram"
                    />
                  </div>

                  <hr className="border-stone-100" />

                  {/* The Inner letter */}
                  <h4 className="font-semibold text-stone-800 text-xs uppercase tracking-wider">💌 আসল গোপন চিঠি</h4>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">চিরকুটের ভেতর গোপন বার্তা (বাং)</label>
                    <textarea
                      rows={4}
                      value={edited.secretMessageBn}
                      onChange={(e) => editField("secretMessageBn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Private Message Letter (EN)</label>
                    <textarea
                      rows={4}
                      value={edited.secretMessageEn}
                      onChange={(e) => editField("secretMessageEn", e.target.value)}
                      className="w-full border border-stone-300 rounded-sm py-2 px-3 text-xs"
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Dashboard Footer Save Actions Panel */}
            <div className="p-6 border-t border-stone-200 bg-stone-50 flex flex-col space-y-3">
              <button
                onClick={handleSaveClick}
                className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-sm font-semibold text-xs tracking-widest uppercase cursor-pointer flex items-center justify-center space-x-2 shadow-md hover:shadow-primary/10 transition-transform active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-sm">save</span>
                <span>সংরক্ষণ করুন ও দেখুন (Save Story)</span>
              </button>

              <button
                onClick={handleResetClick}
                className="w-full bg-stone-200 hover:bg-stone-300 text-stone-700 py-2 rounded-sm font-semibold text-[10px] tracking-widest uppercase cursor-pointer flex items-center justify-center space-x-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">history</span>
                <span>ফ্যাক্টরি ডিফল্ট রিসেট (Reset to Default)</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
